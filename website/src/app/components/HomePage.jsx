import { useIntlayer } from "next-intlayer/server";
import Image from 'next/image';
import SupportLink from "./Custom/SupportLink";

const Home = () => {
    const navigation = useIntlayer("navigation");
    const content = useIntlayer("home-page");
    return(
    <main id="home">
        <div className="text-center bg-gray-800 text-white pt-20 py-10">
            {/* Logo */}
            <div className='flex justify-center caret-transparent'>
            <Image 
                className='m-10 size-[120px] sm:size-[160px] rounded-full'
                src="/logos/logo-bg-white.png"
                title={navigation.home.text.value}
                alt={navigation.home.text.value + " footer logo"}
                priority={false}
                width={160}
                height={160}
            />
            </div>
            <h1 className="max-w-3xl mx-auto text-left sm:text-center text-gray-100 text-2xl sm:text-5xl font-semibold px-4 sm:px-6 lg:px-8">
            {content.title}
            </h1>
            <div className="max-w-3xl mx-auto mt-6 text-left text-gray-300 px-4 sm:px-6 lg:px-8 whitespace-pre-line">
            {content.intro}
            </div>
            <hr className="my-10"></hr>
            <h2 className="mt-8 text-xl sm:text-3xl font-bold text-gray-200">{content.projects.title}</h2>
            <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
            {content.projects.items.map((item, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6 text-left">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">{item.title}</h3>
                <p className="text-gray-300 whitespace-pre-line">{item.subtitle}</p>
                </div>
            ))}
            </div>
            <div className="md:hidden mt-5 text-5xl">
                <SupportLink className="text-xl" />
            </div>
        </div>
        <div>
            
        </div>
        </main>
    )
}

export default Home;