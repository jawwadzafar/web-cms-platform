import payload from 'payload'

export const seedData = async () => {
  try {
    // Check if user already exists
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length > 0) {
      console.log('Data already seeded. Skipping...')
      return
    }

    console.log('Starting data seeding...')

    // Create admin user
    const adminUser = await payload.create({
      collection: 'users',
      data: {
        email: 'admin@medicalcenter.com',
        password: 'Admin123!',
        firstName: 'Admin',
        lastName: 'User',
        role: 'admin',
      },
    })

    console.log('Admin user created:', adminUser.email)

    // Create categories
    const generalCategory = await payload.create({
      collection: 'categories',
      data: {
        name: 'General',
        slug: 'general',
        description: 'General medical content',
        color: '#3B82F6',
      },
    })

    const healthCategory = await payload.create({
      collection: 'categories',
      data: {
        name: 'Health Tips',
        slug: 'health-tips',
        description: 'Health and wellness tips',
        color: '#10B981',
      },
    })

    console.log('Categories created')

    // Create tags
    const wellnessTag = await payload.create({
      collection: 'tags',
      data: {
        name: 'Wellness',
        slug: 'wellness',
        description: 'Wellness and preventive care',
      },
    })

    const preventionTag = await payload.create({
      collection: 'tags',
      data: {
        name: 'Prevention',
        slug: 'prevention',
        description: 'Preventive medicine and health',
      },
    })

    console.log('Tags created')

    // Create team members
    const doctorSmith = await payload.create({
      collection: 'team',
      data: {
        name: 'Dr. Sarah Smith',
        slug: 'dr-sarah-smith',
        role: 'Chief Medical Officer',
        bio: 'Dr. Smith has over 15 years of experience in internal medicine and preventive care.',
        shortBio: 'Board-certified internist with 15+ years experience',
        email: 'dr.smith@medicalcenter.com',
        phone: '(555) 123-4567',
        specializations: [
          { specialization: 'Internal Medicine' },
          { specialization: 'Preventive Care' },
          { specialization: 'Chronic Disease Management' },
        ],
        education: [
          {
            degree: 'MD',
            institution: 'Harvard Medical School',
            year: '2008',
          },
          {
            degree: 'BS Biology',
            institution: 'Stanford University',
            year: '2004',
          },
        ],
        active: true,
        featured: true,
        orderIndex: 1,
      },
    })

    console.log('Team members created')

    // Create location
    const mainLocation = await payload.create({
      collection: 'locations',
      data: {
        name: 'Main Campus',
        slug: 'main-campus',
        address: {
          street: '123 Medical Drive',
          city: 'Healthcare City',
          state: 'HC',
          zipCode: '12345',
          country: 'United States',
        },
        contact: {
          phone: '(555) 123-4567',
          email: 'info@medicalcenter.com',
        },
        hours: [
          {
            day: 'monday',
            openTime: '8:00 AM',
            closeTime: '6:00 PM',
            closed: false,
          },
          {
            day: 'tuesday',
            openTime: '8:00 AM',
            closeTime: '6:00 PM',
            closed: false,
          },
          {
            day: 'wednesday',
            openTime: '8:00 AM',
            closeTime: '6:00 PM',
            closed: false,
          },
          {
            day: 'thursday',
            openTime: '8:00 AM',
            closeTime: '6:00 PM',
            closed: false,
          },
          {
            day: 'friday',
            openTime: '8:00 AM',
            closeTime: '6:00 PM',
            closed: false,
          },
          {
            day: 'saturday',
            openTime: '9:00 AM',
            closeTime: '4:00 PM',
            closed: false,
          },
          {
            day: 'sunday',
            openTime: '',
            closeTime: '',
            closed: true,
          },
        ],
        description: 'Our main medical campus featuring state-of-the-art facilities and comprehensive care.',
        amenities: [
          { amenity: 'Free Parking' },
          { amenity: 'Wheelchair Accessible' },
          { amenity: 'Pharmacy On-Site' },
          { amenity: 'Laboratory Services' },
        ],
        active: true,
        featured: true,
      },
    })

    console.log('Locations created')

    // Create services
    const generalMedicine = await payload.create({
      collection: 'services',
      data: {
        title: 'General Medicine',
        slug: 'general-medicine',
        description: 'Comprehensive primary care services including routine check-ups, preventive care, and treatment of common illnesses. Our experienced physicians provide personalized care for patients of all ages.',
        shortDescription: 'Comprehensive primary care services for all ages',
        category: generalCategory.id,
        pricing: {
          priceRange: '$150 - $300',
          pricingDetails: 'Consultation fees vary based on complexity and duration of visit',
        },
        features: [
          { feature: 'Annual Physical Exams' },
          { feature: 'Preventive Care Screenings' },
          { feature: 'Chronic Disease Management' },
          { feature: 'Immunizations' },
          { feature: 'Health Education' },
        ],
        active: true,
        featured: true,
        meta: {
          title: 'General Medicine Services - Medical Center',
          description: 'Expert primary care services including preventive care, check-ups, and treatment of common conditions.',
          keywords: 'general medicine, primary care, preventive care, check-ups',
        },
      },
    })

    const cardiology = await payload.create({
      collection: 'services',
      data: {
        title: 'Cardiology',
        slug: 'cardiology',
        description: 'Advanced cardiac care including diagnostics, treatment, and prevention of heart-related conditions. Our cardiologists use the latest technology to provide comprehensive heart health services.',
        shortDescription: 'Advanced cardiac care and heart health services',
        category: generalCategory.id,
        pricing: {
          priceRange: '$250 - $500',
          pricingDetails: 'Specialist consultation and diagnostic procedures',
        },
        features: [
          { feature: 'EKG/ECG Testing' },
          { feature: 'Echocardiography' },
          { feature: 'Stress Testing' },
          { feature: 'Cardiac Risk Assessment' },
          { feature: 'Heart Disease Prevention' },
        ],
        active: true,
        featured: true,
        meta: {
          title: 'Cardiology Services - Heart Care Specialists',
          description: 'Comprehensive cardiac care including diagnostics, treatment, and prevention of heart conditions.',
          keywords: 'cardiology, heart care, cardiac specialists, heart disease',
        },
      },
    })

    console.log('Services created')

    // Create pages
    const aboutPage = await payload.create({
      collection: 'pages',
      data: {
        title: 'About Us',
        slug: 'about',
        content: 'Welcome to Medical Center, your trusted healthcare partner. We have been serving the community for over 20 years with compassionate, comprehensive medical care.',
        excerpt: 'Learn about our mission, values, and commitment to providing exceptional healthcare services.',
        published: true,
        showInNavigation: true,
        meta: {
          title: 'About Medical Center - Our Story & Mission',
          description: 'Learn about Medical Center\'s commitment to providing compassionate, comprehensive healthcare services to our community.',
          keywords: 'medical center, about us, healthcare mission, medical services',
        },
      },
    })

    console.log('Pages created')

    // Create blog posts
    const healthPost = await payload.create({
      collection: 'posts',
      data: {
        title: '5 Essential Health Tips for Better Living',
        slug: '5-essential-health-tips',
        content: 'Maintaining good health is essential for a fulfilling life. Here are five evidence-based tips to help you live healthier and happier.',
        excerpt: 'Discover five evidence-based health tips that can transform your well-being and help you live a healthier, more fulfilling life.',
        category: healthCategory.id,
        tags: [wellnessTag.id, preventionTag.id],
        author: doctorSmith.id,
        published: true,
        publishedDate: new Date().toISOString(),
        featured: true,
        meta: {
          title: '5 Essential Health Tips for Better Living - Medical Blog',
          description: 'Expert advice on living healthier with five essential tips from our medical professionals.',
          keywords: 'health tips, wellness, preventive care, healthy living',
        },
      },
    })

    console.log('Blog posts created')

    console.log('✅ Data seeding completed successfully!')

  } catch (error) {
    console.error('❌ Error seeding data:', error)
    throw error
  }
}