# Sanimed International Website Enhancement Plan
*Created: August 25, 2025*

## Project Overview
Complete redesign and content enhancement of Sanimed International website based on actual company content, with modern design, proper branding, and rich media integration.

## Phase 1: Brand Identity & Logo Integration

### 1.1 Logo Implementation
- **Download official logos:**
  - Main logo: `https://sanimedgroup.com/assets/images/logo.png`
  - White logo: `https://sanimedgroup.com/assets/images/logo-white.png`
- **Extract brand colors** from logos for consistent theming
- **Implement smart logo switching:**
  - Dark logo on light backgrounds
  - White logo on dark backgrounds
- **Update all logo instances** in header, footer, and loading screens

### 1.2 Remove Dark/Light Theme System
- **Remove theme toggle** from header/footer
- **Remove dark mode CSS variables** and classes
- **Optimize for light theme only** with brand colors
- **Clean up unused dark theme code**

## Phase 2: Content Migration & Enhancement

### 2.1 Homepage Content Update
Based on actual Sanimed homepage (sanimedgroup.com):
- **Company tagline:** "Solutions For A Changing World"
- **Mission section:** Focus on UAE medical infrastructure enhancement
- **Vision section:** R&D Center for Precision Medicine with multiomics lab
- **Key services overview:** Molecular Diagnostics, Genetics, Clinical Diagnostics
- **Contact information update:** Correct phone numbers and locations

### 2.2 About Page Content
Based on actual about page (sanimedgroup.com/about):
- **Company background:** Subsidiary of International Holding Company (ADX:IHC)
- **COVID-19 contribution:** National screening program participation
- **Team expertise:** International pathologists, geneticists, clinical pathology experts
- **Unique selling proposition:** "Elevate your expectations with Sanimed International Lab"
- **Core values:** Innovation, R&D investment, rigorous training

### 2.3 Service Pages Enhancement
- **Molecular Diagnostics:** UAE-wide coverage, 62 collection sites, COVID-19 testing
- **Genetics:** Latest technology, comprehensive genetic testing
- **Clinical Diagnostics:** Biochemistry, hematology, immunology, transfusion medicine

## Phase 3: Visual Design Overhaul

### 3.1 Remove Harsh Border Design
- **Replace all `border-l-4` styles** with modern alternatives
- **Implement soft shadows** and gradient backgrounds
- **Use rounded corners** and glassmorphism effects
- **Create cohesive card designs** with subtle depth

### 3.2 Modern Color Scheme
- **Extract primary colors** from Sanimed logos
- **Create consistent color palette:**
  - Primary: Logo-derived colors
  - Secondary: Complementary medical/tech colors
  - Accent: Highlight colors for CTAs
- **Update all color variables** in CSS and components

## Phase 4: Rich Media Integration

### 4.1 High-Quality Images from Unsplash
**Download and implement:**
- **Homepage hero:** Modern medical laboratory facility
- **About page:** Team collaboration, research facility
- **Service pages:** Specific to each service (molecular lab, genetics lab, clinical lab)
- **Background images:** Subtle medical/tech patterns

### 4.2 Royalty-Free Videos
**Source and integrate:**
- **Homepage hero video:** Laboratory work, precision medicine
- **About page video:** Team working, innovation showcase
- **Service demonstration videos:** Equipment in action
- **Background ambient videos:** Subtle scientific animations

**Video Sources:**
- Pexels (royalty-free)
- Pixabay (royalty-free)
- Unsplash Videos (royalty-free)

## Phase 5: Technical Implementation

### 5.1 Component Updates
- **Header:** New logo, remove theme toggle, update navigation
- **Footer:** New logo, updated contact info, proper service links
- **Cards:** Modern design without harsh borders
- **Buttons:** Brand-colored CTAs with smooth transitions

### 5.2 Page-Specific Enhancements
- **Homepage:** New hero with video/image, mission/vision sections
- **About:** Company story, team showcase, achievements
- **Services:** Enhanced individual pages with rich visuals
- **Contact:** Updated contact information, locations

### 5.3 Performance Optimization
- **Image optimization:** WebP formats, proper sizing
- **Video optimization:** Compressed, multiple formats
- **Loading states:** Branded loading animations
- **Responsive design:** Mobile-first approach

## Phase 6: Content Strategy

### 6.1 SEO Enhancement
- **Update meta descriptions** with actual company information
- **Optimize headings** with brand messaging
- **Add structured data** for medical services
- **Local SEO** for UAE locations

### 6.2 User Experience
- **Clear navigation** to all 3 services
- **Strong call-to-actions** for contact/consultation
- **Professional medical imagery** throughout
- **Trust indicators:** Certifications, achievements, partnerships

## Implementation Priority

### High Priority (Phase 1-2):
1. Logo integration and branding
2. Remove dark theme system
3. Update homepage and about content
4. Fix harsh border designs

### Medium Priority (Phase 3-4):
1. Visual design overhaul
2. High-quality images integration
3. Video implementation
4. Color scheme updates

### Lower Priority (Phase 5-6):
1. Performance optimization
2. SEO enhancements
3. Advanced animations
4. Additional content creation

## Success Metrics
- **Visual consistency** across all pages
- **Proper branding** with official logos
- **Rich content** matching actual company information
- **Modern design** without harsh borders
- **Engaging media** with videos and high-quality images
- **Professional appearance** suitable for medical/laboratory services

## Files to be Created/Modified
- `plan.md` (this document)
- All component files for logo integration
- CSS/styling files for design updates
- Image and video assets
- Content updates across all pages
- Removal of dark theme system