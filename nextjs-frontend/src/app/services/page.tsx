import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Microscope, Dna, FlaskConical, Check, Phone, Mail, Heart, Zap, Brain, Bone, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services - Sanimed International | Molecular Diagnostics, Genetics & Clinical Lab',
  description: 'Comprehensive molecular diagnostics, genetics, and clinical laboratory services. Advanced healthcare solutions from Sanimed International in the UAE.',
  keywords: 'molecular diagnostics, genetics testing, clinical laboratory, healthcare services, precision medicine, UAE',
  openGraph: {
    title: 'Our Services - Sanimed International',
    description: 'Advanced molecular diagnostics, genetics, and clinical laboratory services in the UAE.',
    type: 'website',
  },
}

const services = [
  {
    id: 'molecular-diagnostics',
    title: 'Molecular Diagnostics',
    icon: Microscope,
    iconColor: 'text-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    borderColor: 'border-l-blue-600',
    description: 'Advanced molecular testing using cutting-edge technology to detect genetic variations, infectious diseases, and cancer biomarkers with exceptional accuracy.',
    detailedDescription: 'Our molecular diagnostics division employs state-of-the-art PCR, next-generation sequencing (NGS), and other advanced technologies to provide precise molecular analysis. We specialize in detecting genetic mutations, infectious pathogens, and oncological markers that are crucial for accurate diagnosis and personalized treatment plans.',
    features: [
      'Real-time PCR and qPCR testing',
      'Next-generation sequencing (NGS)',
      'Genetic mutation analysis',
      'Infectious disease detection',
      'Cancer biomarker identification',
      'Pharmacogenomic testing',
      'Rapid turnaround times',
      'High accuracy and sensitivity'
    ],
    applications: [
      'Oncology: Cancer biomarker detection and monitoring',
      'Infectious Diseases: Pathogen identification and antibiotic resistance',
      'Pharmacogenomics: Drug metabolism and response prediction',
      'Inherited Disorders: Genetic mutation screening',
      'Personalized Medicine: Treatment optimization'
    ]
  },
  {
    id: 'genetics',
    title: 'Genetics',
    icon: Dna,
    iconColor: 'text-green-600',
    bgColor: 'from-green-50 to-green-100',
    borderColor: 'border-l-green-600',
    description: 'Comprehensive genetic testing and analysis services including hereditary disease screening, pharmacogenomics, and personalized medicine solutions.',
    detailedDescription: 'Our genetics department provides comprehensive genetic testing services, from single gene analysis to whole exome sequencing. We offer genetic counseling and interpretation services to help healthcare providers and patients understand genetic test results and their clinical implications.',
    features: [
      'Hereditary disease screening',
      'Carrier testing',
      'Prenatal genetic testing',
      'Pharmacogenomic analysis',
      'Whole exome sequencing',
      'Genetic counseling services',
      'Family history analysis',
      'Risk assessment and management'
    ],
    applications: [
      'Hereditary Cancer: BRCA1/2, Lynch syndrome screening',
      'Cardiovascular Genetics: Familial hypercholesterolemia, cardiomyopathy',
      'Reproductive Health: Carrier screening, prenatal testing',
      'Neurogenetics: Alzheimer\'s, Parkinson\'s disease markers',
      'Metabolic Disorders: Genetic enzyme deficiency screening'
    ]
  },
  {
    id: 'clinical-diagnostics',
    title: 'Clinical Diagnostics',
    icon: FlaskConical,
    iconColor: 'text-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    borderColor: 'border-l-purple-600',
    description: 'Full range of clinical laboratory services including biochemistry, hematology, immunology, and microbiology to support comprehensive patient care.',
    detailedDescription: 'Our clinical diagnostics laboratory provides comprehensive routine and specialized testing services. We maintain the highest standards of quality and accuracy, with rapid turnaround times to support clinical decision-making and patient care.',
    features: [
      'Complete blood count (CBC)',
      'Comprehensive metabolic panel',
      'Lipid profiles and cardiac markers',
      'Hormone and endocrine testing',
      'Immunology and serology',
      'Microbiology and culture',
      'Coagulation studies',
      'Therapeutic drug monitoring'
    ],
    applications: [
      'Routine Health Screening: Annual checkups and wellness monitoring',
      'Chronic Disease Management: Diabetes, hypertension, heart disease',
      'Infectious Disease Diagnosis: Bacterial, viral, and fungal infections',
      'Endocrine Disorders: Thyroid, diabetes, reproductive hormones',
      'Cardiovascular Health: Lipid profiles, cardiac risk assessment'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-background to-green-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Sanimed International offers three core areas of expertise in advanced diagnostics, 
            delivering comprehensive healthcare solutions across the UAE.
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>CAP Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>ISO 15189 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Service Overview */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`bg-gradient-to-br ${service.bgColor} rounded-full p-4`}>
                        <service.icon className={`h-12 w-12 ${service.iconColor}`} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                        <Badge variant="secondary" className="text-xs">
                          Core Service
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.detailedDescription}
                    </p>

                    <Card className={`border-l-4 ${service.borderColor}`}>
                      <CardHeader>
                        <CardTitle className="text-lg">Key Features</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Applications */}
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Clinical Applications</CardTitle>
                        <CardDescription>
                          Key areas where our {service.title.toLowerCase()} services make a difference
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {service.applications.map((application, appIndex) => (
                          <div key={appIndex} className="border-l-2 border-gray-200 pl-4">
                            <div className="font-medium text-sm">
                              {application.split(':')[0]}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {application.split(':')[1]}
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <div className={`bg-gradient-to-br ${service.bgColor} rounded-lg p-6`}>
                      <h3 className="font-semibold mb-3">Why Choose Our {service.title}?</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-600" />
                          <span>State-of-the-art technology and equipment</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-600" />
                          <span>Expert team of certified professionals</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-600" />
                          <span>Rapid turnaround times</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-600" />
                          <span>Comprehensive reporting and consultation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Specialty Medical Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive specialty services with advanced diagnostic capabilities across multiple medical disciplines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-600">
              <CardHeader className="text-center pb-4">
                <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Heart className="h-12 w-12 text-red-600" />
                </div>
                <CardTitle className="text-xl mb-2">Cardiology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed mb-4">
                  Comprehensive cardiovascular care with advanced cardiac diagnostics, emergency services, and preventive care.
                </CardDescription>
                <div className="text-center">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/cardiology">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-yellow-600">
              <CardHeader className="text-center pb-4">
                <div className="bg-yellow-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <Zap className="h-12 w-12 text-yellow-600" />
                </div>
                <CardTitle className="text-xl mb-2">Endocrinology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed mb-4">
                  Hormone testing and endocrine disorders diagnosis including diabetes, thyroid, and metabolic conditions.
                </CardDescription>
                <div className="text-center">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/endocrinology">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-indigo-600">
              <CardHeader className="text-center pb-4">
                <div className="bg-indigo-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                  <Brain className="h-12 w-12 text-indigo-600" />
                </div>
                <CardTitle className="text-xl mb-2">Neurology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed mb-4">
                  Neurological testing and brain health diagnostics for comprehensive neurological care and assessment.
                </CardDescription>
                <div className="text-center">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/neurology">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-600">
              <CardHeader className="text-center pb-4">
                <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Bone className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-xl mb-2">Orthopedics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed mb-4">
                  Bone and joint health diagnostics with advanced imaging and laboratory support for orthopedic care.
                </CardDescription>
                <div className="text-center">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/orthopedics">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-pink-600">
              <CardHeader className="text-center pb-4">
                <div className="bg-pink-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                  <Eye className="h-12 w-12 text-pink-600" />
                </div>
                <CardTitle className="text-xl mb-2">Dermatology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed mb-4">
                  Skin health diagnostics and dermatological testing for comprehensive skin care and treatment support.
                </CardDescription>
                <div className="text-center">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/dermatology">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-teal-600">
              <CardHeader className="text-center pb-4">
                <div className="bg-teal-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <Microscope className="h-12 w-12 text-teal-600" />
                </div>
                <CardTitle className="text-xl mb-2">Radiology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed mb-4">
                  Advanced imaging services and radiological diagnostics with state-of-the-art equipment and expertise.
                </CardDescription>
                <div className="text-center">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/radiology">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">R&D</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Future: Precision Medicine Center</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sanimed International is actively developing a cutting-edge R&D Center for Precision Medicine. 
              This initiative will advance healthcare innovation in the region, focusing on personalized treatment 
              approaches, novel diagnostic methods, and collaborative research with international partners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">Research</div>
                <p className="text-sm">Advancing diagnostic technologies and methodologies</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">Innovation</div>
                <p className="text-sm">Developing next-generation precision medicine solutions</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">Collaboration</div>
                <p className="text-sm">Partnering with leading institutions worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Our Diagnostic Services?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our team to discuss your diagnostic needs and learn how our services can support your patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/blog">Latest Updates</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5" />
              <div className="text-left">
                <p className="font-semibold">Abu Dhabi</p>
                <p className="opacity-90">+971-2-6767676</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5" />
              <div className="text-left">
                <p className="font-semibold">Sharjah</p>
                <p className="opacity-90">+971-6-5644445</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 mt-6">
            <Mail className="h-5 w-5" />
            <p className="opacity-90">customercare@sanimedgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  )
}