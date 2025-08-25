import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Check, Zap, Phone, Mail, TestTube, Activity, Calendar, Thermometer } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Endocrinology Services - Sanimed International | Hormone Testing & Diabetes Care',
  description: 'Comprehensive endocrinology services including hormone testing, diabetes management, thyroid function tests, and metabolic disorder diagnostics in the UAE.',
  keywords: 'endocrinology, hormone testing, diabetes, thyroid, metabolic disorders, UAE',
  openGraph: {
    title: 'Endocrinology Services - Sanimed International',
    description: 'Advanced endocrinology services for hormone testing and metabolic health.',
    type: 'website',
  },
}

const keyFeatures = [
  'Comprehensive Hormone Panels',
  'Diabetes Management Testing',
  'Thyroid Function Assessment',
  'Adrenal Function Testing',
  'Reproductive Hormone Analysis',
  'Growth Hormone Testing',
  'Insulin Resistance Testing',
  'Metabolic Syndrome Evaluation'
]

const endocrineServices = [
  {
    icon: TestTube,
    title: 'Thyroid Disorders',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'Comprehensive thyroid function testing and monitoring',
    tests: [
      'TSH (Thyroid Stimulating Hormone)',
      'Free T4 and Free T3',
      'Thyroid Antibodies (TPO, TgAb)',
      'Reverse T3',
      'Thyroglobulin',
      'Calcitonin'
    ]
  },
  {
    icon: Activity,
    title: 'Diabetes & Glucose',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    description: 'Diabetes diagnosis and management testing',
    tests: [
      'HbA1c (Glycated Hemoglobin)',
      'Fasting Blood Glucose',
      'Oral Glucose Tolerance Test (OGTT)',
      'C-Peptide',
      'Insulin Levels',
      'Fructosamine'
    ]
  },
  {
    icon: Zap,
    title: 'Reproductive Hormones',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
    description: 'Fertility and reproductive health hormone testing',
    tests: [
      'Testosterone (Total & Free)',
      'Estradiol (E2)',
      'Progesterone',
      'LH & FSH',
      'Prolactin',
      'SHBG (Sex Hormone Binding Globulin)'
    ]
  },
  {
    icon: Thermometer,
    title: 'Adrenal Function',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    description: 'Adrenal gland and stress hormone assessment',
    tests: [
      'Cortisol (Morning & Evening)',
      '24-hour Urine Cortisol',
      'ACTH (Adrenocorticotropic Hormone)',
      'Aldosterone',
      'Renin Activity',
      'DHEA-S'
    ]
  }
]

const metabolicConditions = [
  {
    condition: 'Type 2 Diabetes',
    description: 'Comprehensive diabetes screening and management',
    keyTests: ['HbA1c', 'Fasting Glucose', 'OGTT']
  },
  {
    condition: 'Hypothyroidism',
    description: 'Underactive thyroid diagnosis and monitoring',
    keyTests: ['TSH', 'Free T4', 'TPO Antibodies']
  },
  {
    condition: 'PCOS',
    description: 'Polycystic ovary syndrome hormone evaluation',
    keyTests: ['Testosterone', 'LH/FSH Ratio', 'Insulin']
  },
  {
    condition: 'Metabolic Syndrome',
    description: 'Comprehensive metabolic health assessment',
    keyTests: ['Glucose', 'Lipid Profile', 'Insulin']
  }
]

const hormonalProfiles = [
  {
    profile: 'Complete Thyroid Panel',
    tests: ['TSH', 'Free T4', 'Free T3', 'TPO Ab', 'TgAb'],
    indication: 'Comprehensive thyroid function assessment'
  },
  {
    profile: 'Diabetes Monitoring',
    tests: ['HbA1c', 'Fasting Glucose', 'C-Peptide', 'Microalbumin'],
    indication: 'Diabetes diagnosis and monitoring'
  },
  {
    profile: 'Female Hormone Panel',
    tests: ['Estradiol', 'Progesterone', 'LH', 'FSH', 'Testosterone'],
    indication: 'Female reproductive health assessment'
  },
  {
    profile: 'Male Hormone Panel',
    tests: ['Total Testosterone', 'Free Testosterone', 'SHBG', 'Prolactin'],
    indication: 'Male reproductive and overall health'
  }
]

const testingProcess = [
  {
    step: '1',
    title: 'Clinical Assessment',
    description: 'Detailed hormonal and metabolic health evaluation'
  },
  {
    step: '2',
    title: 'Sample Collection',
    description: 'Proper timing and collection for accurate hormone measurement'
  },
  {
    step: '3',
    title: 'Laboratory Analysis',
    description: 'Advanced hormone testing using specialized methodologies'
  },
  {
    step: '4',
    title: 'Results & Consultation',
    description: 'Expert interpretation and endocrine consultation'
  }
]

export default function EndocrinologyPage() {
  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="gap-2">
            <Link href="/services">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-50 via-background to-yellow-100 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/medical/hormone-testing.jpg"
            alt="Endocrinology Laboratory"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-yellow-600/70" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="bg-yellow-600 text-white rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Zap className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Endocrinology Services
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto mb-8">
            Comprehensive hormone testing and endocrine disorder diagnostics including diabetes management, 
            thyroid function assessment, and reproductive health evaluation with advanced laboratory capabilities.
          </p>
          <div className="flex justify-center gap-4 text-sm text-yellow-200">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-yellow-400" />
              <span>Hormone Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-yellow-400" />
              <span>Advanced Testing</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-yellow-400" />
              <span>Expert Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Hormone Health</Badge>
              <h2 className="text-3xl font-bold mb-6 text-yellow-900">Advanced Endocrine Testing</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our endocrinology laboratory provides comprehensive hormone testing and metabolic health assessment. 
                With specialized assays and expert interpretation, we support healthcare providers in diagnosing 
                and managing endocrine disorders effectively.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="border-l-4 border-l-yellow-600">
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Our Endocrine Testing?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Specialized Assays</h4>
                    <p className="text-sm text-muted-foreground">Advanced hormone testing with high sensitivity and specificity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Expert Interpretation</h4>
                    <p className="text-sm text-muted-foreground">Endocrinology consultants for complex case analysis</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Comprehensive Panels</h4>
                    <p className="text-sm text-muted-foreground">Complete hormone profiles for thorough evaluation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Rapid Results</h4>
                    <p className="text-sm text-muted-foreground">Fast turnaround for time-sensitive hormone testing</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Endocrine Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hormone Testing Specialties</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized hormone testing across major endocrine systems for comprehensive metabolic health assessment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {endocrineServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`${service.bgColor} rounded-full p-3`}>
                      <service.icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-sm mb-3">Key Tests:</p>
                    <div className="grid grid-cols-1 gap-1">
                      {service.tests.map((test, testIndex) => (
                        <div key={testIndex} className="flex items-center gap-2">
                          <div className={`h-2 w-2 ${service.color.replace('text-', 'bg-')} rounded-full`} />
                          <span className="text-sm">{test}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Conditions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Common Endocrine Conditions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diagnostic testing for prevalent endocrine and metabolic disorders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metabolicConditions.map((condition, index) => (
              <Card key={index} className="border-l-4 border-l-yellow-600">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-900">{condition.condition}</CardTitle>
                  <CardDescription className="text-sm">{condition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-sm mb-2">Key Tests:</p>
                    {condition.keyTests.map((test, testIndex) => (
                      <div key={testIndex} className="text-sm text-muted-foreground">
                        • {test}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hormone Profiles */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-900">Comprehensive Hormone Profiles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pre-designed hormone panels for efficient and comprehensive endocrine assessment.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hormonalProfiles.map((profile, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-yellow-900 flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      {profile.profile}
                    </CardTitle>
                    <CardDescription>{profile.indication}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium text-sm mb-2">Included Tests:</p>
                      <div className="flex flex-wrap gap-1">
                        {profile.tests.map((test, testIndex) => (
                          <Badge key={testIndex} variant="secondary" className="text-xs">
                            {test}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Hormone Testing Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized approach to hormone testing ensuring accurate results and proper clinical interpretation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingProcess.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">{process.step}</span>
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Hormone Testing?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our endocrinology team for comprehensive hormone testing, diabetes management, 
            and metabolic health assessment services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Request Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-yellow-600">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5" />
              <div>
                <p className="font-semibold">Abu Dhabi</p>
                <p className="opacity-90">+971-2-6767676</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5" />
              <div>
                <p className="font-semibold">Sharjah</p>
                <p className="opacity-90">+971-6-5644445</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-5 w-5" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="opacity-90">customercare@sanimedgroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}