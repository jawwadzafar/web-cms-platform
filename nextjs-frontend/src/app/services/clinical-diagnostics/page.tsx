import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Check, FlaskConical, Phone, Mail, Heart, Droplet, Activity, TestTube } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Clinical Diagnostics - Sanimed International | Comprehensive Laboratory Testing',
  description: 'Complete clinical diagnostic services including biochemistry, hematology, immunology, and microbiology testing. Advanced laboratory solutions in the UAE.',
  keywords: 'clinical diagnostics, laboratory testing, biochemistry, hematology, immunology, microbiology, UAE',
  openGraph: {
    title: 'Clinical Diagnostics - Sanimed International',
    description: 'Comprehensive clinical laboratory testing services for healthcare professionals.',
    type: 'website',
  },
}

const keyFeatures = [
  'Biochemistry & Clinical Chemistry',
  'Hematology & Coagulation',
  'Immunology & Serology',
  'Microbiology & Infectious Disease',
  'Endocrinology & Hormones',
  'Cardiac Markers',
  'Tumor Markers',
  'Drug Monitoring'
]

const diagnosticCategories = [
  {
    icon: Droplet,
    title: 'Hematology',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    description: 'Comprehensive blood cell analysis and coagulation studies',
    tests: [
      'Complete Blood Count (CBC)',
      'Blood Film Examination',
      'Coagulation Studies (PT/PTT)',
      'D-Dimer & Fibrinogen',
      'Blood Group & Cross-matching',
      'Hemoglobin Electrophoresis'
    ]
  },
  {
    icon: Activity,
    title: 'Biochemistry',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'Clinical chemistry and metabolic panel testing',
    tests: [
      'Comprehensive Metabolic Panel',
      'Liver Function Tests',
      'Kidney Function Tests',
      'Lipid Profile',
      'Glucose & HbA1c',
      'Electrolytes & Proteins'
    ]
  },
  {
    icon: Heart,
    title: 'Immunology',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    description: 'Immune system analysis and autoimmune testing',
    tests: [
      'Autoimmune Markers (ANA, ENA)',
      'Rheumatoid Factor & Anti-CCP',
      'Complement Levels (C3, C4)',
      'Immunoglobulins (IgG, IgA, IgM)',
      'Allergy Testing (IgE)',
      'Inflammatory Markers (CRP, ESR)'
    ]
  },
  {
    icon: TestTube,
    title: 'Microbiology',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    description: 'Infectious disease detection and antimicrobial susceptibility',
    tests: [
      'Culture & Sensitivity',
      'Gram Staining',
      'Parasitology',
      'Viral Load Testing',
      'Antimicrobial Susceptibility',
      'Rapid Diagnostic Tests'
    ]
  }
]

const specializedTests = [
  {
    category: 'Cardiac Markers',
    tests: ['Troponin I/T', 'CK-MB', 'NT-proBNP', 'Myoglobin'],
    description: 'Heart attack and cardiac function assessment'
  },
  {
    category: 'Tumor Markers',
    tests: ['PSA', 'CEA', 'CA 125', 'CA 19-9', 'AFP'],
    description: 'Cancer screening and monitoring'
  },
  {
    category: 'Hormones',
    tests: ['Thyroid Panel', 'Reproductive Hormones', 'Cortisol', 'Growth Hormone'],
    description: 'Endocrine system evaluation'
  },
  {
    category: 'Therapeutic Drug Monitoring',
    tests: ['Digoxin', 'Phenytoin', 'Warfarin INR', 'Immunosuppressants'],
    description: 'Medication level optimization'
  }
]

const testingProcess = [
  {
    step: '1',
    title: 'Sample Collection',
    description: 'Professional phlebotomy services with proper sample handling protocols'
  },
  {
    step: '2',
    title: 'Laboratory Analysis',
    description: 'Advanced automated analyzers and manual techniques for accurate results'
  },
  {
    step: '3',
    title: 'Quality Control',
    description: 'Rigorous quality control measures and external proficiency testing'
  },
  {
    step: '4',
    title: 'Results Delivery',
    description: 'Timely reporting with reference ranges and critical value alerts'
  }
]

export default function ClinicalDiagnosticsPage() {
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
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-background to-purple-100 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/clinical-diagnostics.jpg"
            alt="Clinical Diagnostics Laboratory"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-purple-600/70" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="bg-purple-600 text-white rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <FlaskConical className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Clinical Diagnostics
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Comprehensive clinical laboratory services providing accurate, reliable diagnostic testing across 
            all major medical specialties with rapid turnaround times and expert interpretation.
          </p>
          <div className="flex justify-center gap-4 text-sm text-purple-200">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-400" />
              <span>24/7 Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-400" />
              <span>Automated Systems</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-purple-400" />
              <span>Quality Assured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Clinical Laboratory</Badge>
              <h2 className="text-3xl font-bold mb-6 text-purple-900">Comprehensive Diagnostic Testing</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our clinical diagnostics department provides a complete range of laboratory services supporting 
                healthcare professionals in patient diagnosis, treatment monitoring, and disease prevention. 
                With state-of-the-art automated analyzers and expert laboratory professionals, we ensure 
                accurate and timely results.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="border-l-4 border-l-purple-600">
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Our Laboratory?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Advanced Automation</h4>
                    <p className="text-sm text-muted-foreground">Latest generation automated analyzers for precision and speed</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-sm text-muted-foreground">Rigorous quality control and external proficiency testing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Rapid Turnaround</h4>
                    <p className="text-sm text-muted-foreground">Fast reporting with critical value notification systems</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Expert Staff</h4>
                    <p className="text-sm text-muted-foreground">Experienced laboratory professionals and pathologists</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Laboratory Departments</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized laboratory departments covering all aspects of clinical diagnostics and patient care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diagnosticCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`${category.bgColor} rounded-full p-3`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-sm mb-3">Key Tests:</p>
                    <div className="grid grid-cols-1 gap-1">
                      {category.tests.map((test, testIndex) => (
                        <div key={testIndex} className="flex items-center gap-2">
                          <div className={`h-2 w-2 ${category.color.replace('text-', 'bg-')} rounded-full`} />
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

      {/* Specialized Tests */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Specialized Testing Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced diagnostic panels for specific clinical conditions and therapeutic monitoring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedTests.map((category, index) => (
              <Card key={index} className="border-l-4 border-l-purple-600">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-900">{category.category}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.tests.map((test, testIndex) => (
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

      {/* Testing Process */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-purple-900">Our Laboratory Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional laboratory workflow ensuring accuracy, reliability, and timely results delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingProcess.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
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

      {/* Sample Test Menu */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Common Laboratory Tests</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Frequently requested diagnostic tests across our laboratory departments.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-purple-900">Routine Chemistry</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">• Basic Metabolic Panel</div>
                  <div className="text-sm">• Comprehensive Metabolic Panel</div>
                  <div className="text-sm">• Liver Function Tests</div>
                  <div className="text-sm">• Kidney Function Tests</div>
                  <div className="text-sm">• Lipid Profile</div>
                  <div className="text-sm">• Thyroid Function Tests</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-purple-900">Hematology</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">• Complete Blood Count (CBC)</div>
                  <div className="text-sm">• Differential Count</div>
                  <div className="text-sm">• ESR & CRP</div>
                  <div className="text-sm">• Coagulation Studies</div>
                  <div className="text-sm">• Blood Group & Rh</div>
                  <div className="text-sm">• Reticulocyte Count</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-purple-900">Immunology</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">• Hepatitis Panel</div>
                  <div className="text-sm">• HIV Testing</div>
                  <div className="text-sm">• Autoimmune Markers</div>
                  <div className="text-sm">• Allergy Testing</div>
                  <div className="text-sm">• Tumor Markers</div>
                  <div className="text-sm">• Cardiac Markers</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Laboratory Testing?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our clinical diagnostics team for comprehensive laboratory testing services 
            and professional consultation on diagnostic solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Request Test Information</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-purple-600">
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