import axios from 'axios';
import { NextRequest } from 'next/server';

import { getIntlayer } from 'intlayer';
import { DISCUSSION_CATEGORY_ID, DISCUSSIONS_REPO_ID, GITHUB_WRITE_API_TOKEN } from '../../../server/github/config';
import { createDiscussion } from '../../../server/github/discussions/create';

const secretKey = process.env.GOOGLE_SECRET_KEY || '';

const verifyCaptcha = async (token: string) => {
  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
  );

  if (response.data.success) {
    return true;
  }
  return false;
};

export async function POST(req: NextRequest, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = getIntlayer('contact-section', locale);
  const data = await req.json();

  try {
    const verified = await verifyCaptcha(data.token);
    if (!verified) {
      return Response.json({ message: content.form.error.captcha }, { status: 405 });
    }

    const message = `
        Name: ${data.name}\n
        Email: ${data.email}\n
        Phone: ${data.phone}\n
        Birthday: ${data.birthday}\n
        Gender: ${data.gender}\n
        Address: ${data.address}\n
        Note: ${data.note}
        `;

    const createDiscussionParams = {
      repositoryId: DISCUSSIONS_REPO_ID,
      categoryId: DISCUSSION_CATEGORY_ID,
      title: `${locale}: ${data.name} (${data.email})`,
      body: message,
    };

    const discussion = await createDiscussion(GITHUB_WRITE_API_TOKEN, { input: createDiscussionParams });
    const discussionId = discussion.data.createDiscussion.discussion.id;

    return Response.json({ id: discussionId, locale: locale, comment: message });
  } catch {
    return Response.json({ message: content.form.error.server }, { status: 500 });
  }
}
