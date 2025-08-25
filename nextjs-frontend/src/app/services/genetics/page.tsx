import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Check, Dna, Phone, Mail, Heart, Baby, Brain, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Genetics Testing - Sanimed International | Hereditary Disease & Pharmacogenomics',
  description: 'Comprehensive genetic testing services including hereditary disease screening, carrier testing, pharmacogenomics, and personalized medicine solutions in the UAE.',
  keywords: 'genetics testing, hereditary disease screening, pharmacogenomics, BRCA testing, genetic counseling, UAE',
  openGraph: {
    title: 'Genetics Testing - Sanimed International',
    description: 'Comprehensive genetic testing and hereditary disease screening for personalized medicine.',
    type: 'website',
  },
}

const keyFeatures = [
  'Hereditary disease screening',
  'Carrier testing',
  'Prenatal genetic testing',
  'Pharmacogenomic analysis',
  'Whole exome sequencing',
  'Genetic counseling services',
  'Family history analysis',
  'Risk assessment and management'
]

const geneticCategories = [
  {
    icon: Heart,
    title: 'Cardiovascular Genetics',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    description: 'Genetic testing for inherited heart conditions and cardiovascular risk factors',
    conditions: [
      'Familial Hypercholesterolemia',
      'Hypertrophic Cardiomyopathy',
      'Dilated Cardiomyopathy',
      'Arrhythmogenic Right Ventricular Cardiomyopathy',
      'Long QT Syndrome',
      'Brugada Syndrome'
    ]
  },
  {
    icon: Users,
    title: 'Cancer Genetics',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    description: 'Hereditary cancer syndrome testing for early detection and prevention',
    conditions: [
      'BRCA1/2 (Breast/Ovarian Cancer)',
      'Lynch Syndrome (Colorectal Cancer)',
      'Li-Fraumeni Syndrome',
      'Familial Adenomatous Polyposis',
      'Von Hippel-Lindau Disease',
      'Multiple Endocrine Neoplasia'
    ]
  },
  {
    icon: Brain,
    title: 'Neurogenetics',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'Genetic testing for neurological and neurodevelopmental disorders',
    conditions: [
      'Huntington Disease',
      'Spinocerebellar Ataxias',
      'Charcot-Marie-Tooth Disease',
      'Duchenne/Becker Muscular Dystrophy',
      'Fragile X Syndrome',
      'Rett Syndrome'
    ]
  },
  {
    icon: Baby,
    title: 'Reproductive Genetics',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    description: 'Genetic testing for reproductive health and family planning',
    conditions: [
      'Carrier Screening Panels',
      'Cystic Fibrosis',
      'Spinal Muscular Atrophy',
      'Thalassemia/Sickle Cell',
      'Tay-Sachs Disease',
      'Preimplantation Genetic Testing'
    ]
  }
]

const pharmacogenomics = [
  {
    category: 'Cardiovascular',
    drugs: ['Warfarin', 'Clopidogrel', 'Statins', 'ACE Inhibitors'],
    genes: ['CYP2C9', 'VKORC1', 'CYP2C19', 'SLCO1B1']
  },
  {
    category: 'Psychiatry',
    drugs: ['SSRIs', 'Antipsychotics', 'Tricyclics', 'Mood Stabilizers'],
    genes: ['CYP2D6', 'CYP2C19', 'HTR2A', 'COMT']
  },
  {
    category: 'Oncology',
    drugs: ['5-Fluorouracil', 'Irinotecan', 'Tamoxifen', 'Trastuzumab'],
    genes: ['DPYD', 'UGT1A1', 'CYP2D6', 'HER2']
  },
  {
    category: 'Anesthesia',
    drugs: ['Succinylcholine', 'Sevoflurane', 'Codeine', 'Tramadol'],
    genes: ['BCHE', 'RYR1', 'CYP2D6', 'CYP3A4']
  }
]

const testingProcess = [
  {
    step: '1',
    title: 'Consultation & Counseling',
    description: 'Pre-test genetic counseling to discuss family history, risks, and testing options'
  },
  {
    step: '2',
    title: 'Sample Collection',
    description: 'Simple blood draw or saliva collection in our comfortable patient areas'
  },
  {
    step: '3',
    title: 'Advanced Analysis',
    description: 'Comprehensive genetic analysis using next-generation sequencing technology'
  },
  {
    step: '4',
    title: 'Results & Guidance',
    description: 'Detailed report interpretation with post-test counseling and recommendations'
  }
]

export default function GeneticsPage() {
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
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-background to-green-100 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/genetics.jpg"
            alt="Genetics Laboratory"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-600/70" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="mb-8">
            <Image 
              src="/images/logos/sanimed-logo-white.png" 
              alt="Sanimed International" 
              width={240} 
              height={54}
              className="h-14 w-auto mx-auto mb-6 opacity-90"
            />
          </div>
          <div className="bg-green-600 text-white rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Dna className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Genetics Testing
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Comprehensive genetic testing and analysis services including hereditary disease screening, 
            pharmacogenomics, and personalized medicine solutions with expert genetic counseling support.
          </p>
          <div className="flex justify-center gap-4 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>Genetic Counseling</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>NGS Technology</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>Comprehensive Panels</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Genetic Services</Badge>
              <h2 className="text-3xl font-bold mb-6 text-green-900">Comprehensive Genetic Analysis</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our genetics department provides comprehensive genetic testing services, from single gene analysis 
                to whole exome sequencing. We offer genetic counseling and interpretation services to help healthcare 
                providers and patients understand genetic test results and their clinical implications.
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
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Genetics Services?</h3>
                <div className="space-y-6">
                  <div className="group/item p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300">
                    <h4 className="font-semibold mb-2 text-green-800 group-hover/item:text-green-900">Expert Genetic Counselors</h4>
                    <p className="text-sm text-green-700 group-hover/item:text-green-800">Board-certified genetic counselors for pre and post-test support</p>
                  </div>
                  <div className="group/item p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300">
                    <h4 className="font-semibold mb-2 text-green-800 group-hover/item:text-green-900">Comprehensive Testing</h4>
                    <p className="text-sm text-green-700 group-hover/item:text-green-800">From single genes to whole exome sequencing panels</p>
                  </div>
                  <div className="group/item p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300">
                    <h4 className="font-semibold mb-2 text-green-800 group-hover/item:text-green-900">Clinical Interpretation</h4>
                    <p className="text-sm text-green-700 group-hover/item:text-green-800">Detailed reports with actionable medical recommendations</p>
                  </div>
                  <div className="group/item p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300">
                    <h4 className="font-semibold mb-2 text-green-800 group-hover/item:text-green-900">Family Support</h4>
                    <p className="text-sm text-green-700 group-hover/item:text-green-800">Cascade testing and family risk assessment services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genetic Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Genetic Testing Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized genetic testing across major medical specialties for comprehensive hereditary risk assessment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {geneticCategories.map((category, index) => (
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
                    <p className="font-medium text-sm mb-3">Common Conditions:</p>
                    <div className="grid grid-cols-1 gap-1">
                      {category.conditions.map((condition, condIndex) => (
                        <div key={condIndex} className="flex items-center gap-2">
                          <div className={`h-2 w-2 ${category.color.replace('text-', 'bg-')} rounded-full`} />
                          <span className="text-sm">{condition}</span>
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

      {/* Pharmacogenomics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pharmacogenomics Testing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Personalize medication therapy based on individual genetic makeup for optimal drug response and safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pharmacogenomics.map((category, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg text-green-900">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-sm mb-2">Key Medications:</p>
                    <div className="space-y-1">
                      {category.drugs.map((drug, drugIndex) => (
                        <div key={drugIndex} className="text-sm text-muted-foreground">
                          • {drug}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-2">Tested Genes:</p>
                    <div className="flex flex-wrap gap-1">
                      {category.genes.map((gene, geneIndex) => (
                        <Badge key={geneIndex} variant="secondary" className="text-xs">
                          {gene}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-green-900">Our Testing Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive approach to genetic testing with expert support at every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingProcess.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-3xl font-bold mb-4">Sample Genetic Tests</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Representative selection of our genetic testing capabilities across different medical specialties.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-green-900">Hereditary Cancer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">• BRCA1/2 Comprehensive</div>
                  <div className="text-sm">• Lynch Syndrome Panel</div>
                  <div className="text-sm">• Hereditary Breast/Ovarian</div>
                  <div className="text-sm">• Colorectal Cancer Panel</div>
                  <div className="text-sm">• Li-Fraumeni Syndrome</div>
                  <div className="text-sm">• Pancreatic Cancer Panel</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-green-900">Cardiac Genetics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">• Hypertrophic Cardiomyopathy</div>
                  <div className="text-sm">• Dilated Cardiomyopathy</div>
                  <div className="text-sm">• Arrhythmia Panel</div>
                  <div className="text-sm">• Familial Hypercholesterolemia</div>
                  <div className="text-sm">• Aortopathy Panel</div>
                  <div className="text-sm">• Comprehensive Cardiac</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-green-900">Neurogenetics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm">• Huntington Disease</div>
                  <div className="text-sm">• Spinocerebellar Ataxia</div>
                  <div className="text-sm">• Muscular Dystrophy Panel</div>
                  <div className="text-sm">• Neuropathy Panel</div>
                  <div className="text-sm">• Epilepsy Panel</div>
                  <div className="text-sm">• Intellectual Disability</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Genetic Testing?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our genetics team to discuss testing options, genetic counseling, and how genetic 
            information can guide personalized medical care for your patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-green-600">
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