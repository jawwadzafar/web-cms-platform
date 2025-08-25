import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, Check, Microscope, Phone, Mail, Calendar, Clock, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Molecular Diagnostics - Sanimed International | Advanced PCR & NGS Testing',
  description: 'Advanced molecular diagnostics services including PCR, NGS, genetic mutation analysis, and infectious disease detection. Precision medicine solutions in the UAE.',
  keywords: 'molecular diagnostics, PCR testing, NGS, genetic mutation analysis, infectious disease, cancer biomarkers, UAE',
  openGraph: {
    title: 'Molecular Diagnostics - Sanimed International',
    description: 'Advanced molecular diagnostics services for precision medicine and accurate disease detection.',
    type: 'website',
  },
}

const keyFeatures = [
  'Real-time PCR and qPCR testing',
  'Next-generation sequencing (NGS)',
  'Genetic mutation analysis',
  'Infectious disease detection',
  'Cancer biomarker identification',
  'Pharmacogenomic testing',
  'Rapid turnaround times',
  'High accuracy and sensitivity'
]

const clinicalApplications = [
  {
    area: 'Oncology',
    description: 'Cancer biomarker detection and monitoring for personalized treatment strategies',
    examples: ['BRCA1/2 testing', 'Lynch syndrome', 'HER2 status', 'MSI testing']
  },
  {
    area: 'Infectious Diseases',
    description: 'Pathogen identification and antibiotic resistance testing',
    examples: ['COVID-19 PCR', 'Hepatitis panel', 'TB resistance', 'Sepsis panels']
  },
  {
    area: 'Pharmacogenomics',
    description: 'Drug metabolism and response prediction for optimal therapy',
    examples: ['Warfarin dosing', 'Clopidogrel response', 'Psychiatric meds', 'Cancer therapy']
  },
  {
    area: 'Inherited Disorders',
    description: 'Genetic mutation screening for hereditary conditions',
    examples: ['Cystic fibrosis', 'Thalassemia', 'Huntington disease', 'Muscular dystrophy']
  }
]

const technologies = [
  {
    name: 'Real-time PCR',
    description: 'Quantitative detection of DNA/RNA with high sensitivity and specificity',
    applications: 'Viral load monitoring, gene expression, SNP analysis'
  },
  {
    name: 'Next-Generation Sequencing',
    description: 'Comprehensive genomic analysis for precision medicine',
    applications: 'Whole exome sequencing, targeted panels, tumor profiling'
  },
  {
    name: 'Digital PCR',
    description: 'Absolute quantification without standard curves',
    applications: 'Rare variant detection, copy number variation, liquid biopsy'
  },
  {
    name: 'Multiplex PCR',
    description: 'Simultaneous detection of multiple targets in single reaction',
    applications: 'Respiratory panels, STI screening, genetic disorder panels'
  }
]

export default function MolecularDiagnosticsPage() {
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
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-background to-blue-100 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/molecular-diagnostics.jpg"
            alt="Molecular Diagnostics Laboratory"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/70" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="bg-blue-600 text-white rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Microscope className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Molecular Diagnostics
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Advanced molecular testing using cutting-edge PCR, NGS, and genomic technologies to detect genetic 
            variations, infectious diseases, and cancer biomarkers with exceptional accuracy for precision medicine.
          </p>
          <div className="flex justify-center gap-4 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>Real-time PCR</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>NGS Technology</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>24-48hr TAT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Core Capabilities</Badge>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Advanced Molecular Testing</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our molecular diagnostics division employs state-of-the-art PCR, next-generation sequencing (NGS), 
                and other advanced technologies to provide precise molecular analysis crucial for accurate diagnosis 
                and personalized treatment plans.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    Why Choose Our Molecular Diagnostics?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cutting-Edge Technology</h4>
                    <p className="text-sm text-muted-foreground">Latest PCR and NGS platforms for highest accuracy</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">PhD-level molecular biologists and geneticists</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-sm text-muted-foreground">CAP accredited with rigorous quality controls</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Rapid Turnaround</h4>
                    <p className="text-sm text-muted-foreground">Results within 24-48 hours for most tests</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art molecular diagnostic platforms for comprehensive genetic analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">{tech.name}</CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-800 mb-1">Applications:</p>
                    <p className="text-sm text-blue-700">{tech.applications}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Clinical Applications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key medical areas where our molecular diagnostics make a critical difference in patient care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinicalApplications.map((application, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{application.area}</CardTitle>
                  <CardDescription className="text-base">{application.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Key Tests:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {application.examples.map((example, exIndex) => (
                        <div key={exIndex} className="flex items-center gap-2">
                          <div className="h-2 w-2 bg-blue-600 rounded-full" />
                          <span className="text-sm">{example}</span>
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

      {/* Test Menu */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Sample Test Menu</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Representative selection of our molecular diagnostic testing capabilities.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Infectious Disease</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">• COVID-19 RT-PCR</div>
                  <div className="text-sm">• Respiratory Pathogen Panel</div>
                  <div className="text-sm">• Hepatitis B/C Quantitative</div>
                  <div className="text-sm">• TB Resistance Testing</div>
                  <div className="text-sm">• HIV Viral Load</div>
                  <div className="text-sm">• CMV Quantitative</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Oncology</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">• BRCA1/2 Mutation</div>
                  <div className="text-sm">• Lynch Syndrome Panel</div>
                  <div className="text-sm">• Tumor Mutation Panel</div>
                  <div className="text-sm">• HER2 Amplification</div>
                  <div className="text-sm">• KRAS/NRAS Testing</div>
                  <div className="text-sm">• Liquid Biopsy</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">Genetics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">• Cystic Fibrosis Screen</div>
                  <div className="text-sm">• Thalassemia Testing</div>
                  <div className="text-sm">• Fragile X Syndrome</div>
                  <div className="text-sm">• Pharmacogenomics</div>
                  <div className="text-sm">• Carrier Screening</div>
                  <div className="text-sm">• Paternity Testing</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Molecular Diagnostics?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our molecular diagnostics team to discuss testing options, sample requirements, 
            and turnaround times for your patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
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