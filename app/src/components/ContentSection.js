import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollEffects, useIntersectionObserver } from '../hooks/useScrollEffects';
import { Card, CardContent } from './ui/card';
import { Description } from './Content/Description';

import { 
  Lightbulb, 
  Brain,
  Target,
  CheckCircle,
  XCircle,
  Shield,
  Sun,
  LoaderPinwheel,
  FerrisWheel,
  Cloud,
  Smile,
  Activity,
  Eye,
  Stethoscope,
  MapPin,
  Music,
  Gift,
  Frown,
  ScanHeart
} from 'lucide-react';

const ContentSection = ({ sectionKey, id, icon: Icon, bgImage }) => {
  const { t, hasKey } = useLanguage();
  const { scrollY } = useScrollEffects();
  const [sectionRef, isSectionVisible] = useIntersectionObserver();
  
  const parallaxOffset = scrollY * 0.3;
  
  const getIconColor = () => {
    switch (sectionKey) {
      case 'interconnectedness': return 'text-blue-600';
      case 'naturesJustice': return 'text-green-600';
      case 'health': return 'text-rose-600';
      case 'examples': return 'text-amber-600';
      default: return 'text-gray-600';
    }
  };

  const getAccentColor = () => {
    switch (sectionKey) {
      case 'interconnectedness': return 'from-blue-50 to-indigo-50';
      case 'naturesJustice': return 'from-green-50 to-emerald-50';
      case 'health': return 'from-rose-50 to-pink-50';
      case 'examples': return 'from-amber-50 to-yellow-50';
      default: return 'from-gray-50 to-slate-50';
    }
  };

  // Icon mappings for positive consequences
  const getPositiveIcon = (index) => {
    const icons = [Sun, ScanHeart, Smile];
    const IconComponent = icons[index] || Sun;
    return <IconComponent className="text-emerald-500 mt-1 flex-shrink-0" size={18} />;
  };

  // Icon mappings for negative consequences  
  const getNegativeIcon = (index) => {
    const icons = [Cloud, Frown, Activity];
    const IconComponent = icons[index] || Cloud;
    return <IconComponent className="text-red-500 mt-1 flex-shrink-0" size={18} />;
  };

  // Icon mappings for real-world cases
  const getCaseIcon = (index) => {
    const icons = [MapPin, Activity, Music, Gift];
    const IconComponent = icons[index] || Lightbulb;
    return IconComponent;
  };


  return (
    <section 
      id={id}
      ref={sectionRef}
      className="relative py-24 px-2 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      {bgImage && <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          transform: `translateY(${parallaxOffset}px)`,
          filter: 'brightness(0.2)'
        }}
      />}
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getAccentColor()} opacity-95`} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-8 ${getIconColor()} transition-all duration-300 hover:scale-105`}>
              <Icon size={40} />
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight">
              {t(`${sectionKey}Title`)}
            </h2>
            
            {/* Quote */}
            {sectionKey !== "naturesJustice" && hasKey(`${sectionKey}Quote`) &&
              <div className="max-w-4xl mx-auto mb-12">
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light italic text-gray-700 leading-relaxed pl-2 pr-2 border-l-4 border-emerald-500 bg-white/80 backdrop-blur-sm rounded-r-lg py-6 shadow-sm whitespace-pre-line">
                  {t(`${sectionKey}Quote`).split('**').map((part, index) => 
                    index % 2 === 1 ? <strong key={index} className="text-bold">{part}</strong> : part
                  ).map((part, index) => 
                    typeof part === 'string' && part.includes('*') 
                      ? part.split('*').map((subpart, subindex) => 
                          subindex % 2 === 1 ? <em key={`${index}-${subindex}`} className="text-gray-800 font-medium">{subpart}</em> : subpart
                        )
                      : part
                  )}
                </blockquote>
              </div>
            }
            
            {/* Description */}
            <Description text={t(`${sectionKey}Description`)} />
          </div>

          {sectionKey === 'health' && (
            <div className="grid gap-8 space-y-8">
              {/* Organ-Action-Consequence Analogy Box */}
              <Card className="bg-gradient-to-br from-rose-50 to-pink-100 border-0 shadow-xl">
                <CardContent className="p-8">
                  
                  <h3 className="text-2xl font-bold text-rose-700 mb-6 flex items-center gap-3">
                    <Stethoscope className="text-rose-500" size={28} />
                    {t('healthAnalogy').title}
                  </h3>
                  <div className="grid lg:grid-cols-2 lg:gap-10 gap-2">
                    <div>
                      <p className="text-rose-800 leading-relaxed mb-6">
                        {t('healthAnalogy').subtitle}  
                      </p>
                      
                      <blockquote className="text-rose-800 italic bg-white/60 p-4 rounded-lg border-l-4 border-rose-400 mb-6">
                        {t('healthAnalogy').quote}  
                      </blockquote>
                    </div>
                    <ul className="space-y-3 text-rose-800">
                      <li className="flex items-start gap-3">
                        <Smile className="text-rose-500 mt-1 flex-shrink-0" size={18} />
                        <span>{t('healthAnalogy').items[0]}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Eye className="text-rose-500 mt-1 flex-shrink-0" size={18} />
                        <span>{t('healthAnalogy').items[1]}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="text-rose-500 mt-1 flex-shrink-0" size={18} />
                        <span>{t('healthAnalogy').items[2]}</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Description text={t(`${sectionKey}Reasoning`)} />
            </div>
          )}

          {sectionKey === 'examples' && (
            <div className="grid md:grid-cols-2 gap-6">
              {t("exampleCases").map((example, index) => {
                const IconComponent = getCaseIcon(index);
                const title = example.title;
                const content = example.subtitle;
                
                return (
                  <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 whitespace-pre-line">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 flex-shrink-0">
                          <IconComponent className="text-amber-600" size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-amber-700 mb-3">
                            {title}
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
          
          {/* Section-Specific Content */}
          <div className="grid lg:grid-cols-1 gap-12 items-start">
            <div className="space-y-8">
              {/* Nature's Justice - Positive and Negative Cards */}
              {sectionKey === 'naturesJustice' && (
                <div className="space-y-6">
                  <Card className="grid lg:grid-cols-2 gap-12 bg-white/90 backdrop-blur-sm shadow-xl border-0 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center gap-3">
                        <CheckCircle className="text-emerald-500" size={28} />
                        {t('naturesJusticePositiveConsequencesTitle')}
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          {getPositiveIcon(0)}
                          <span className="text-gray-700 leading-relaxed">{t('naturesJusticePositiveConsequencesItems').nature}</span>
                        </li>
                        <li className="flex items-start gap-3">
                          {getPositiveIcon(1)}
                          <span className="text-gray-700 leading-relaxed">{t('naturesJusticePositiveConsequencesItems').health}</span>
                        </li>
                        <li className="flex items-start gap-3">
                          {getPositiveIcon(2)}
                          <span className="text-gray-700 leading-relaxed">{t('naturesJusticePositiveConsequencesItems').luck}</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-3">
                        <XCircle className="text-red-500" size={28} />
                        {t('naturesJusticeNegativeConsequencesTitle')}
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          {getNegativeIcon(0)}
                          <span className="text-gray-700 leading-relaxed">{t('naturesJusticeNegativeConsequencesItems').nature}</span>
                        </li>
                        <li className="flex items-start gap-3">
                          {getNegativeIcon(1)}
                          <span className="text-gray-700 leading-relaxed">{t('naturesJusticeNegativeConsequencesItems').health}</span>
                        </li>
                        <li className="flex items-start gap-3">
                          {getNegativeIcon(2)}
                          <span className="text-gray-700 leading-relaxed">{t('naturesJusticeNegativeConsequencesItems').luck}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Interconnectedness - Experiment Card */}
              {sectionKey === 'interconnectedness' && (
                <div className='grid gap-16'>
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                      <Brain className="text-blue-600" size={28} />
                      {t('interconnectednessExperimentTitle')}
                    </h3>
                    <p className="text-blue-800 leading-relaxed italic">
                      {t('interconnectednessExperimentText')}
                    </p>
                  </CardContent>
                </Card>

                <Description text={t(`${sectionKey}Example`)} />
                </div>
              )}

              {/* Nature's Justice - Equality and Freedom Cards */}
              {sectionKey === 'naturesJustice' && (
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                  <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
                        <LoaderPinwheel className="text-blue-600" size={28} />
                        {t('naturesJusticeEqualityTitle')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t('naturesJusticeEqualityText')}  
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-3">
                        <FerrisWheel className="text-purple-600" size={28} />
                        {t('naturesJusticeFreedomTitle')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t('naturesJusticeFreedomText')}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}

              {sectionKey === 'naturesJustice' && (
                <div className='py-8'>
                  <Description text={t("naturesJusticeExtra")} />
                </div>
              )}

              {/* Key Takeaway */}
              {["naturesJustice"].includes(sectionKey) &&
                <Card className="bg-gradient-to-br from-emerald-50 to-teal-100 border-0 shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <Target className="text-emerald-600 mx-auto mb-4" size={32} />
                    <p className="text-emerald-800 leading-relaxed">
                      {t(`${sectionKey}KeyTakeaway`)}
                    </p>
                  </CardContent>
                </Card>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;