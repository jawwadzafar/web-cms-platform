import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Check, Heart, Phone, Mail, Activity, Zap, Stethoscope, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cardiology Services - Sanimed International | Heart Health & Cardiac Care',
  description: 'Comprehensive cardiology services including cardiac diagnostics, heart disease prevention, and cardiovascular health monitoring. Advanced cardiac care in the UAE.',
  keywords: 'cardiology, heart health, cardiac diagnostics, ECG, echocardiogram, cardiovascular, UAE',
  openGraph: {
    title: 'Cardiology Services - Sanimed International',
    description: 'Advanced cardiology services for comprehensive heart health and cardiac care.',
    type: 'website',
  },
}

const keyFeatures = [
  'Electrocardiogram (ECG/EKG)',
  'Echocardiography',
  'Stress Testing',
  'Holter Monitoring',
  'Cardiac Biomarkers',
  'Lipid Profile Analysis',
  'Blood Pressure Assessment',
  'Cardiovascular Risk Assessment'
]

const cardiologyServices = [
  {
    icon: Activity,
    title: 'Diagnostic Cardiology',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    description: 'Comprehensive cardiac diagnostic testing and monitoring services',
    services: [
      'Electrocardiogram (ECG)',
      'Exercise Stress Testing',
      'Ambulatory Blood Pressure Monitoring',
      'Heart Rate Variability Analysis',
      'Cardiac Rhythm Assessment',
      'Event Monitoring'
    ]
  },
  {
    icon: Heart,
    title: 'Cardiac Imaging',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'Advanced imaging techniques for detailed heart structure analysis',
    services: [
      'Echocardiography (2D/3D)',
      'Doppler Ultrasound',
      'Transesophageal Echo (TEE)',
      'Stress Echocardiography',
      'Cardiac CT Imaging',
      'Nuclear Cardiology'
    ]
  },
  {
    icon: Stethoscope,
    title: 'Preventive Cardiology',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    description: 'Heart disease prevention and cardiovascular risk management',
    services: [
      'Cardiovascular Risk Assessment',
      'Cholesterol Screening',
      'Hypertension Management',
      'Diabetes Cardiac Screening',
      'Family History Evaluation',
      'Lifestyle Risk Counseling'
    ]
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Cardiology',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    description: 'Urgent cardiac care and emergency diagnostic services',
    services: [
      'Acute Chest Pain Evaluation',
      'Heart Attack Diagnosis',
      'Cardiac Enzyme Testing',
      'Emergency ECG Interpretation',
      'Arrhythmia Assessment',
      'Cardiac Emergency Consultation'
    ]
  }
]

const cardiacConditions = [
  {
    category: 'Coronary Artery Disease',
    description: 'Heart attack prevention and coronary health assessment',
    tests: ['Cardiac Enzymes', 'Stress Testing', 'Coronary Risk Profile']
  },
  {
    category: 'Heart Rhythm Disorders',
    description: 'Arrhythmia detection and monitoring services',
    tests: ['Holter Monitor', '24-hr ECG', 'Event Recording']
  },
  {
    category: 'Heart Failure',
    description: 'Heart function evaluation and monitoring',
    tests: ['NT-proBNP', 'BNP', 'Echocardiography']
  },
  {
    category: 'Hypertension',
    description: 'Blood pressure monitoring and cardiovascular impact',
    tests: ['24-hr BP Monitor', 'Target Organ Assessment', 'Risk Stratification']
  }
]

const cardiacBiomarkers = [
  {
    test: 'Troponin I/T',
    purpose: 'Heart attack diagnosis',
    turnaround: 'STAT - 30 minutes'
  },
  {
    test: 'CK-MB',
    purpose: 'Myocardial injury assessment',
    turnaround: '1-2 hours'
  },
  {
    test: 'NT-proBNP/BNP',
    purpose: 'Heart failure diagnosis',
    turnaround: '1-2 hours'
  },
  {
    test: 'D-Dimer',
    purpose: 'Pulmonary embolism screening',
    turnaround: '30-60 minutes'
  }
]

const careProcess = [
  {
    step: '1',
    title: 'Initial Assessment',
    description: 'Comprehensive cardiac history and risk factor evaluation'
  },
  {
    step: '2',
    title: 'Diagnostic Testing',
    description: 'Appropriate cardiac tests based on clinical presentation'
  },
  {
    step: '3',
    title: 'Expert Analysis',
    description: 'Cardiologist interpretation and clinical correlation'
  },
  {
    step: '4',
    title: 'Treatment Planning',
    description: 'Personalized cardiac care recommendations and follow-up'
  }
]

export default function CardiologyPage() {
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
      <section className="relative py-20 bg-gradient-to-br from-red-50 via-background to-red-100 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/medical/cardiology.jpg"
            alt="Cardiology Services"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-red-600/70" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="bg-red-600 text-white rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Heart className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Cardiology Services
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
            Comprehensive cardiovascular care with advanced cardiac diagnostics, heart disease prevention, 
            and emergency cardiac services. Protecting your heart health with cutting-edge technology and expertise.
          </p>
          <div className="flex justify-center gap-4 text-sm text-red-200">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-red-400" />
              <span>24/7 Cardiac Emergency</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-red-400" />
              <span>Advanced Diagnostics</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-red-400" />
              <span>Expert Cardiologists</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Cardiac Care</Badge>
              <h2 className="text-3xl font-bold mb-6 text-red-900">Advanced Heart Health Services</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our cardiology department provides comprehensive cardiovascular care from prevention to emergency 
                treatment. With state-of-the-art cardiac diagnostic equipment and experienced cardiologists, 
                we offer personalized heart care solutions for optimal cardiovascular health.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-red-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Our Cardiology Services?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Comprehensive Care</h4>
                    <p className="text-sm text-muted-foreground">From prevention to treatment, complete cardiovascular services</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Emergency Ready</h4>
                    <p className="text-sm text-muted-foreground">24/7 cardiac emergency services and rapid diagnostics</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Advanced Technology</h4>
                    <p className="text-sm text-muted-foreground">Latest cardiac imaging and monitoring equipment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">Board-certified cardiologists and cardiac specialists</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cardiology Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Cardiac Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full spectrum of cardiology services from diagnostic testing to preventive care and emergency treatment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardiologyServices.map((service, index) => (
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
                    <p className="font-medium text-sm mb-3">Available Services:</p>
                    <div className="grid grid-cols-1 gap-1">
                      {service.services.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <div className={`h-2 w-2 ${service.color.replace('text-', 'bg-')} rounded-full`} />
                          <span className="text-sm">{item}</span>
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

      {/* Cardiac Conditions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cardiac Conditions We Treat</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized diagnostic services for common cardiovascular conditions and heart health concerns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardiacConditions.map((condition, index) => (
              <Card key={index} className="border-l-4 border-l-red-600">
                <CardHeader>
                  <CardTitle className="text-lg text-red-900">{condition.category}</CardTitle>
                  <CardDescription className="text-sm">{condition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-sm mb-2">Key Tests:</p>
                    {condition.tests.map((test, testIndex) => (
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

      {/* Cardiac Biomarkers */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-red-900">Cardiac Biomarker Testing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rapid cardiac biomarker testing for accurate diagnosis of heart conditions and emergency care.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cardiacBiomarkers.map((biomarker, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      {biomarker.test}
                    </CardTitle>
                    <CardDescription>{biomarker.purpose}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Turnaround Time:</span>
                      <Badge variant="secondary" className="text-xs">
                        {biomarker.turnaround}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Care Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Cardiac Care Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive approach to cardiac care ensuring accurate diagnosis and optimal treatment outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careProcess.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
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

      {/* Emergency Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AlertTriangle className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Cardiac Emergency Services</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              24/7 cardiac emergency services with rapid diagnostic testing and immediate consultation. 
              Time-critical cardiac care when every minute matters.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader className="text-center">
                  <Zap className="h-12 w-12 text-white mx-auto mb-3" />
                  <CardTitle className="text-white">Emergency Testing</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-2 text-white/90">
                    <li>• STAT Troponin (30 minutes)</li>
                    <li>• Emergency ECG</li>
                    <li>• Cardiac Enzyme Panel</li>
                    <li>• D-Dimer Testing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader className="text-center">
                  <Heart className="h-12 w-12 text-white mx-auto mb-3" />
                  <CardTitle className="text-white">Immediate Care</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-2 text-white/90">
                    <li>• Chest Pain Evaluation</li>
                    <li>• Arrhythmia Assessment</li>
                    <li>• Heart Attack Diagnosis</li>
                    <li>• Cardiology Consultation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Emergency Contact</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-red-600">
                <Link href="/services">All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Cardiac Care?</h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Contact our cardiology team for comprehensive heart health services, emergency cardiac care, 
            or preventive cardiovascular screening.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-semibold">Abu Dhabi</p>
                <p className="text-muted-foreground">+971-2-6767676</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-semibold">Sharjah</p>
                <p className="text-muted-foreground">+971-6-5644445</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">customercare@sanimedgroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}