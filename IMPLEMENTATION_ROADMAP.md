# UNCUT® Sacred Warrior Oil - Implementation Roadmap
## From 7/10 Foundation to 9/10 Production-Ready Launch

**Current Status:** Development complete, needs content + integrations
**Target Launch:** 4-6 weeks from start date
**Expected Conversion Rate:** 3-5% (industry standard for premium skincare)
**Goal Conversion Rate:** 6-8% (with optimizations)

---

## 📊 **STRATEGIC PRIORITIES**

Based on conversion impact analysis, here's the prioritization framework:

| Priority | Task Category | Impact on Conversions | Effort Level | ROI Score |
|----------|---------------|----------------------|--------------|-----------|
| 🔴 **P0** | Professional Photography | +40% | High | 9/10 |
| 🔴 **P0** | E-commerce Integration | +100% (enables sales) | Medium | 10/10 |
| 🔴 **P0** | Pricing Display | +25% | Low | 9/10 |
| 🟡 **P1** | Verified Testimonials | +20% | Medium | 8/10 |
| 🟡 **P1** | Analytics Setup | +15% (data-driven) | Low | 8/10 |
| 🟡 **P1** | Email Integration | +30% (retargeting) | Low | 9/10 |
| 🟢 **P2** | Hero Video | +15% | High | 6/10 |
| 🟢 **P2** | Interactive Quiz | +10% | High | 5/10 |
| 🟢 **P2** | Subscription Model | +25% LTV | Medium | 7/10 |

**P0 = Must-Have for Launch | P1 = Launch Week | P2 = Post-Launch Optimization**

---

## 🗓️ **WEEK-BY-WEEK IMPLEMENTATION PLAN**

### **WEEK 1: CONTENT FOUNDATION (P0)**
**Goal:** Get visual assets and pricing structure in place

#### **Day 1-2: Photography Sourcing**
**Option A: Professional Photoshoot** ($2,000-5,000)
- Hire fitness photographer + female fighter models
- Location: Boxing gym or CrossFit facility
- Shot list:
  1. **Hero shot:** Female fighter post-training, wrapped hands, bottle visible (low light, warm glow)
  2. **Product hero:** Oil bottle with boxing gloves, towel, dim gym background
  3. **Ritual Step 1:** Woman training (heavy bag, mitts, or lifting)
  4. **Ritual Step 2:** Applying oil to shoulders/forearms post-workout
  5. **Ritual Step 3:** Calm reset pose (meditation or stretching)
  6. **Testimonial headshots:** 3 diverse female athletes (different ages, ethnicities)
  7. **Detail shots:** Oil texture, skin application close-up, hands unwrapping

**Option B: Stock Photography** ($200-500)
- Sources: Unsplash, Pexels (free), Adobe Stock, Shutterstock
- Search terms:
  - "Female boxer training"
  - "Woman martial arts gym"
  - "Athletic woman post workout"
  - "Skincare ritual wellness"
- **PRO TIP:** Combine stock with custom product photography (hire product photographer for bottle shots: $300-800)

**Option C: Hybrid Approach (RECOMMENDED)** ($800-1,500)
- Stock photos for hero/ritual steps
- Professional product photography for bottle
- Real athlete testimonial photos (recruit from gym, offer free product)

**Deliverable:** 6-8 high-res images (min 2000px wide, optimized for web)

#### **Day 3: Pricing Strategy**

**Market Research:**
- Competitors:
  - BeautyCounter Body Oil: $48/4oz
  - Herbivore Emerald Oil: $52/1.7oz
  - Kora Organics Noni Glow: $58/3.4oz

**Recommended Pricing:**
```
Single Bottle (2oz): $54
2-Bottle Bundle: $97 ($48.50 each, save 10%)
3-Bottle Bundle: $135 ($45 each, save 17%)
Subscription (monthly): $46 (save 15%, cancel anytime)
```

**Shipping:**
- Free shipping on orders $75+ (encourages 2-bottle purchase)
- Standard shipping: $6.95 (US), $9.95 (Canada)
- Express: $14.95 (2-3 days)

**Add to HTML:**
```html
<div class="pricing-section">
    <div class="price-card">
        <h3>Start Your Ritual</h3>
        <div class="price">$54</div>
        <p class="price-subtitle">2oz bottle • 30-day supply</p>
        <button class="cta-button">Add to Cart</button>
    </div>

    <div class="price-card featured">
        <div class="badge">BEST VALUE</div>
        <h3>Warrior Bundle</h3>
        <div class="price">$97 <span class="save">Save $11</span></div>
        <p class="price-subtitle">2 bottles • Free shipping</p>
        <button class="cta-button-large">Get Bundle</button>
    </div>

    <div class="price-card">
        <h3>Ritual Squad</h3>
        <div class="price">$135 <span class="save">Save $27</span></div>
        <p class="price-subtitle">3 bottles • Free shipping</p>
        <button class="cta-button">Get Squad</button>
    </div>
</div>
```

#### **Day 4-5: Image Integration**

**Replace Placeholders:**
1. Hero background: Replace `hero-background.jpg` reference in styles.css line 164
2. Product bottle SVG: Replace with actual product image
3. Ritual step placeholders: Add real photos
4. Testimonial avatars: Replace placeholder circles with real headshots

**Optimization:**
- Compress images (TinyPNG, ImageOptim): Target <150KB per image
- Convert to WebP format for modern browsers
- Add lazy loading attributes: `loading="lazy"`
- Set proper alt text for SEO and accessibility

**Image HTML Template:**
```html
<picture>
    <source srcset="hero-image.webp" type="image/webp">
    <source srcset="hero-image.jpg" type="image/jpeg">
    <img src="hero-image.jpg" alt="Female fighter applying Sacred Warrior Oil post-training" loading="lazy" width="1920" height="1080">
</picture>
```

#### **Day 6-7: Quality Assurance**

**Cross-Browser Testing:**
- Chrome, Firefox, Safari, Edge
- Mobile: iOS Safari, Chrome Mobile
- Test at breakpoints: 375px, 768px, 1024px, 1440px

**Performance Audit:**
- Run Google PageSpeed Insights (target: 90+ score)
- Test load time (target: <3 seconds)
- Verify all images load correctly

**Deliverables Week 1:**
- ✅ 6-8 professional images integrated
- ✅ Pricing structure implemented
- ✅ Page performance optimized

---

### **WEEK 2: E-COMMERCE + ANALYTICS (P0 + P1)**
**Goal:** Enable purchasing and tracking

#### **Day 8-10: Shopify Integration**

**Setup Process:**

1. **Create Shopify Account**
   - Sign up: https://www.shopify.com
   - Choose plan: Basic ($39/month) or Shopify ($105/month for better reports)

2. **Product Setup**
   - Add product: "Sacred Warrior Oil"
   - Variants: Single, 2-pack, 3-pack
   - SKU codes: UNCUT-SWO-001, UNCUT-SWO-002, UNCUT-SWO-003
   - Inventory: Set initial stock levels
   - Weight: 2oz + packaging (~4oz for shipping)

3. **Buy Button Integration**

   **Option A: Shopify Buy Button (Easiest)**
   - Shopify Admin → Sales Channels → Buy Button
   - Generate embed code for each product
   - Replace CTA buttons with Shopify Buy Buttons

   ```html
   <div id="product-component-1234567890"></div>
   <script type="text/javascript">
   ShopifyBuy.UI.onReady(client).then(function (ui) {
       ui.createComponent('product', {
           id: '1234567890',
           node: document.getElementById('product-component-1234567890'),
           options: { /* styling */ }
       });
   });
   </script>
   ```

   **Option B: Headless Commerce (Advanced)**
   - Use Shopify Storefront API
   - Custom checkout experience
   - Requires backend development

4. **Payment Gateway**
   - Enable Shopify Payments (2.9% + 30¢ per transaction)
   - Or: PayPal, Stripe integration
   - Test mode: Process test transactions

5. **Shipping Configuration**
   - Zones: USA, Canada, International
   - Rates: Free $75+, Standard $6.95, Express $14.95
   - Carrier integration: USPS, UPS, or FedEx

6. **Legal Pages**
   - Generate using Shopify templates:
     - Privacy Policy
     - Terms of Service
     - Refund Policy
     - Shipping Policy
   - Link in footer

#### **Day 11-12: Analytics Implementation**

**Google Analytics 4 Setup:**

1. Create GA4 property: https://analytics.google.com
2. Get Measurement ID: `G-XXXXXXXXXX`
3. Add to `<head>` in index.html:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');

  // Enhanced E-commerce Tracking
  gtag('event', 'view_item', {
    currency: 'USD',
    value: 54.00,
    items: [{
      item_id: 'UNCUT-SWO-001',
      item_name: 'Sacred Warrior Oil',
      item_category: 'Recovery Oil',
      price: 54.00,
      quantity: 1
    }]
  });
</script>
```

4. Set up key events:
   - `page_view` (automatic)
   - `begin_checkout`
   - `purchase`
   - `add_to_cart`
   - `email_capture`

**Meta Pixel Setup:**

1. Create Business Manager account: https://business.facebook.com
2. Create Pixel: Events Manager → Create Pixel
3. Get Pixel ID: `1234567890`
4. Add to `<head>`:

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1234567890');
fbq('track', 'PageView');
fbq('track', 'ViewContent');
</script>
<noscript>
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1234567890&ev=PageView&noscript=1"/>
</noscript>
```

5. Track key events:
   - `PageView`
   - `ViewContent`
   - `AddToCart`
   - `InitiateCheckout`
   - `Purchase`

**Hotjar Setup (User Behavior):**

1. Sign up: https://www.hotjar.com (Free for 35 sessions/day)
2. Install tracking code
3. Enable:
   - Heatmaps (where users click)
   - Session recordings (watch user journeys)
   - Feedback polls (exit surveys)

#### **Day 13-14: Email Marketing Integration**

**ConvertKit Setup (RECOMMENDED for creators):**

1. Sign up: https://convertkit.com ($29/month for 1,000 subscribers)
2. Create form: "Recovery Guide for Athletes"
3. Design automation:

```
Email Sequence: "The Warrior's Ritual"

Day 0 (Immediate): Welcome + PDF download
Subject: "Your Recovery Guide is Here 🥊"
- Thank you for joining
- Download link to "Recovery Protocol for Female Fighters" PDF
- Introduction to UNCUT brand story

Day 2: Ingredient Deep Dive
Subject: "Why These 6 Ingredients Transform Athlete Skin"
- Castor oil for barrier support (with science)
- Jojoba mimics natural oils
- Rosemary circulation boost
- CTA: "See the full ingredient list →"

Day 4: Athlete Story
Subject: "From Destroyed Skin to Disciplined Ritual: Maya's Story"
- Testimonial expansion (Maya, Muay Thai)
- Before/after journey
- "Recovery isn't rest. It's preparation."
- CTA: "Start your ritual →"

Day 6: The Psychology of Ritual
Subject: "Why Elite Athletes Swear by Rituals"
- Habit formation science
- Post-training recovery importance
- Discipline vs. motivation
- CTA: "Build your ritual →"

Day 7: Special Offer
Subject: "Exclusive: WARRIOR10 for First-Time Ritual Builders"
- 10% discount code: WARRIOR10
- Expires in 48 hours
- Bundle recommendation
- 60-day guarantee reminder
- CTA: "Claim your ritual →"

Day 14: Last Chance
Subject: "Your WARRIOR10 code expires tonight"
- Final urgency push
- Social proof (X women started their ritual this week)
- CTA: "Begin your ritual →"
```

4. Integrate form with website:

**Update script.js email form handler:**
```javascript
emailForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = emailForm.querySelector('input[type="email"]');
    const email = emailInput.value;

    // ConvertKit API Integration
    try {
        const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                api_key: 'YOUR_PUBLIC_API_KEY',
                email: email,
                tags: ['landing_page_women', 'exit_intent']
            })
        });

        if (response.ok) {
            // Show success message
            emailForm.innerHTML = `
                <div style="padding: 20px; text-align: center;">
                    <h3 style="color: var(--gold);">Welcome, Warrior! ✊</h3>
                    <p style="color: var(--cream);">Your recovery guide is on its way.<br>Check your inbox in 2 minutes.</p>
                </div>
            `;

            // Track conversion
            gtag('event', 'email_capture', { method: 'exit_intent' });
            fbq('track', 'Lead');

            setTimeout(hideEmailModal, 3000);
        }
    } catch (error) {
        console.error('Email capture error:', error);
    }
});
```

**Alternative: Mailchimp** ($13/month for 500 subscribers)
- Similar process, use Mailchimp API
- Automations less flexible than ConvertKit

#### **Deliverables Week 2:**
- ✅ Shopify store live with buy buttons
- ✅ Payment processing enabled
- ✅ GA4 + Meta Pixel tracking
- ✅ Email automation sequence
- ✅ Legal pages published

---

### **WEEK 3: SOCIAL PROOF + OPTIMIZATION (P1)**
**Goal:** Build trust and credibility

#### **Day 15-17: Testimonial Collection**

**Strategy A: Recruit Beta Testers**
1. Find 5-10 female athletes:
   - Local gym members
   - Instagram fitness micro-influencers (1K-10K followers)
   - CrossFit/MMA/boxing communities
2. Offer free product in exchange for honest review
3. Provide usage guidelines: "Use daily for 14 days, then share feedback"
4. Collect:
   - Written testimonial (100-200 words)
   - Photo (headshot + action shot)
   - Video clip (optional, 30-60s)
   - Before/after skin assessment (self-reported)

**Testimonial Template:**
```
Name: [First Name]
Discipline: [Muay Thai / Boxing / BJJ / Strength Training]
Training Frequency: [3-6x per week]
Location: [City, State/Province]

Quote: "[Specific result or transformation in 1-2 sentences]"

Full Review:
"[Pain point before] → [Experience using product] → [Results after 2-4 weeks]"

Rating: ⭐⭐⭐⭐⭐

Permission: I grant UNCUT® rights to use this testimonial and my image for marketing.
Signature: ___________  Date: _______
```

**Strategy B: Verify Ella Bradford Endorsement**

1. Reach out via Instagram DM or email:
   ```
   Subject: UNCUT® Partnership - Sacred Warrior Oil for Female Athletes

   Hi Ella,

   I'm launching UNCUT®, a premium recovery oil designed for women who train hard—
   athletes like you who value performance, longevity, and ritual over typical
   beauty brand fluff.

   I'd love to send you a complimentary bottle to try. If it resonates with your
   training recovery, would you consider:

   1. Sharing your honest feedback (testimonial + photo)
   2. Affiliate partnership (15% commission on sales via your code ELLA15)
   3. Instagram story/post featuring the product (compensated)

   Your discipline and authentic approach to fitness aligns perfectly with our
   "Recovery is Power" philosophy.

   Let me know if you're interested!

   Best,
   [Your Name]
   UNCUT® - The Warrior's Ritual
   ```

2. If she agrees:
   - Send product sample
   - Get written/video testimonial
   - Create unique affiliate code: ELLA15 (15% discount + 15% commission)
   - Track via Shopify discount code

3. If no response within 7 days:
   - Replace with verified athlete
   - Use micro-influencer (500-5K followers) from target demographic

#### **Day 18-19: Social Proof Enhancement**

**Update HTML with Real Testimonials:**

```html
<div class="testimonial">
    <div class="testimonial-image">
        <img src="testimonials/maya-muay-thai.jpg" alt="Maya, Muay Thai fighter" loading="lazy">
    </div>
    <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
    <blockquote>"After sparring, my skin used to feel destroyed—dry, irritated, stretched.
    After 3 weeks with Sacred Warrior Oil, I actually look forward to my post-training ritual.
    My skin feels resilient now, not wrecked. Game changer."</blockquote>
    <p class="testimonial-author">— Maya R., Muay Thai (Toronto, ON)</p>
    <p class="testimonial-meta">Trains 5x/week • Using for 3 weeks</p>
</div>
```

**Add Trust Badges:**
- "Trusted by 500+ Female Athletes" (update as sales grow)
- "4.9/5.0 Average Rating" (if verified reviews support)
- "Featured in [Podcast/Blog]" (once PR secured)

**Before/After Section (Optional):**
```html
<section class="before-after-section">
    <h2>Real Results from Real Warriors</h2>
    <div class="comparison-grid">
        <div class="comparison">
            <img src="before-after/athlete1-before.jpg" alt="Before 2 weeks">
            <p class="label">Before</p>
        </div>
        <div class="arrow">→</div>
        <div class="comparison">
            <img src="before-after/athlete1-after.jpg" alt="After 2 weeks">
            <p class="label">After 2 Weeks</p>
        </div>
        <p class="caption">"Reduced dryness and irritation on forearms from wrap friction"</p>
    </div>
</section>
```

#### **Day 20-21: A/B Testing Setup**

**Google Optimize Setup:**
1. Link to GA4 property
2. Create experiments:

**Test 1: Hero Headline**
- **Control (A):** "Recovery is Power."
- **Variant B:** "Recovery is Your Competitive Edge."
- **Variant C:** "Elite Recovery for Elite Athletes."
- **Metric:** Scroll depth past hero (>50%)
- **Duration:** 2 weeks, 1,000 visitors per variant

**Test 2: CTA Button Copy**
- **Control (A):** "Begin Your Ritual"
- **Variant B:** "Claim Your Bottle"
- **Variant C:** "Start Your Recovery"
- **Metric:** Click-through rate to product page
- **Duration:** 1 week, 500 visitors per variant

**Test 3: Pricing Display**
- **Control (A):** Show all 3 options equally
- **Variant B:** Highlight 2-bottle bundle as "BEST VALUE"
- **Variant C:** Show single bottle, hide bundles until scroll
- **Metric:** Add-to-cart rate
- **Duration:** 2 weeks, 1,000 visitors per variant

**Test 4: Social Proof Placement**
- **Control (A):** Testimonials after ingredients
- **Variant B:** Testimonials immediately after benefits
- **Variant C:** Testimonials above CTA section
- **Metric:** Time on page + conversion rate
- **Duration:** 2 weeks

**Implementation:**
```html
<!-- Google Optimize Anti-Flicker Snippet -->
<style>.async-hide { opacity: 0 !important} </style>
<script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'OPT-XXXXXXX':true});</script>

<script src="https://www.googleoptimize.com/optimize.js?id=OPT-XXXXXXX"></script>
```

#### **Deliverables Week 3:**
- ✅ 3-5 verified athlete testimonials
- ✅ Professional testimonial photos
- ✅ Trust badges and social proof updated
- ✅ A/B tests configured and running

---

### **WEEK 4: POLISH + LAUNCH PREP (P1 + P2)**
**Goal:** Final optimizations and go-live readiness

#### **Day 22-24: SEO Optimization**

**Meta Tags Enhancement:**
```html
<head>
    <!-- Primary Meta Tags -->
    <title>UNCUT® Sacred Warrior Oil | Premium Recovery for Female Athletes</title>
    <meta name="title" content="UNCUT® Sacred Warrior Oil | Premium Recovery for Female Athletes">
    <meta name="description" content="Recovery is power. Premium natural oil formulated for women who train hard. Hydrates skin, supports muscle recovery, builds ritual. 60-day guarantee. Shop now.">
    <meta name="keywords" content="recovery oil for athletes, female fighter skincare, post-workout recovery oil, natural muscle recovery, athletic skincare women, muay thai recovery, boxing skincare, bjj recovery ritual">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="product">
    <meta property="og:url" content="https://uncut-women.com/">
    <meta property="og:title" content="UNCUT® Sacred Warrior Oil | The Warrior's Ritual">
    <meta property="og:description" content="Premium recovery oil for women who train hard, push limits, and respect their body and discipline.">
    <meta property="og:image" content="https://uncut-women.com/og-image.jpg">
    <meta property="product:price:amount" content="54.00">
    <meta property="product:price:currency" content="USD">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://uncut-women.com/">
    <meta property="twitter:title" content="UNCUT® Sacred Warrior Oil">
    <meta property="twitter:description" content="Recovery is power. Premium oil for female athletes who refuse to break down.">
    <meta property="twitter:image" content="https://uncut-women.com/twitter-card.jpg">

    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "UNCUT Sacred Warrior Oil",
      "image": "https://uncut-women.com/product-image.jpg",
      "description": "Premium recovery oil formulated for active women. Natural ingredients support skin hydration, muscle recovery, and post-training ritual.",
      "brand": {
        "@type": "Brand",
        "name": "UNCUT"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://uncut-women.com/#purchase",
        "priceCurrency": "USD",
        "price": "54.00",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "UNCUT"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47"
      }
    }
    </script>
</head>
```

**Image SEO:**
- All images: Descriptive filenames (e.g., `female-boxer-recovery-oil.jpg` not `IMG_1234.jpg`)
- Alt text: Specific and keyword-rich (e.g., `alt="Female Muay Thai fighter applying Sacred Warrior Oil to shoulders after training"`)
- Title attributes for hover context

**Content SEO:**
- H1: Only one per page ("Recovery is Power")
- H2-H6: Proper hierarchy
- Keyword density: "recovery oil" 8-12 times, "female athletes" 5-8 times
- Internal linking: Link "ingredients" section to future blog posts

#### **Day 25-26: Performance Optimization**

**Speed Audit:**
1. Run Google PageSpeed Insights: https://pagespeed.web.dev
2. Target scores:
   - Desktop: 95+
   - Mobile: 90+

**Optimizations:**
```html
<!-- Preload Critical Assets -->
<link rel="preload" href="fonts/Cinzel-Bold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/Montserrat-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="hero-image.webp" as="image">

<!-- Preconnect to Third-Party Domains -->
<link rel="preconnect" href="https://www.google-analytics.com">
<link rel="preconnect" href="https://connect.facebook.net">
<link rel="dns-prefetch" href="https://cdn.shopify.com">

<!-- Defer Non-Critical JS -->
<script src="script.js" defer></script>

<!-- Critical CSS Inline, Rest Async -->
<style>
    /* Inline critical above-the-fold CSS here */
    .hero { /* minimal hero styles */ }
</style>
<link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
```

**Image Optimization:**
- Convert all to WebP (90% quality)
- Generate responsive sizes: 375w, 768w, 1024w, 1920w
- Use `<picture>` with srcset:
  ```html
  <picture>
      <source media="(min-width: 1024px)" srcset="hero-1920.webp">
      <source media="(min-width: 768px)" srcset="hero-1024.webp">
      <source media="(min-width: 375px)" srcset="hero-768.webp">
      <img src="hero-375.webp" alt="Female fighter post-training">
  </picture>
  ```

**Caching Strategy:**
```
# .htaccess (if using Apache)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

#### **Day 27-28: Pre-Launch Checklist**

**Functionality Testing:**
- ✅ All CTAs lead to correct destinations
- ✅ Email capture submits successfully
- ✅ Buy buttons open Shopify checkout
- ✅ Mobile menu works (if implemented)
- ✅ Forms validate input correctly
- ✅ Exit-intent modal triggers properly
- ✅ Analytics events fire (test in GA4 DebugView)

**Content Review:**
- ✅ No placeholder text remains
- ✅ All images have proper alt text
- ✅ Spelling/grammar check
- ✅ Brand consistency (UNCUT® vs UNCUT vs uncut)
- ✅ Contact information correct
- ✅ Legal pages linked and complete

**Cross-Device Testing:**
- ✅ iPhone 12/13/14 (Safari)
- ✅ Samsung Galaxy (Chrome)
- ✅ iPad (Safari)
- ✅ MacBook (Chrome, Safari, Firefox)
- ✅ Windows PC (Chrome, Edge)

**Accessibility Audit:**
- ✅ WAVE tool: https://wave.webaim.org
- ✅ Keyboard navigation works (Tab, Enter, Esc)
- ✅ Screen reader test (NVDA or VoiceOver)
- ✅ Color contrast ratios: 4.5:1 minimum (WCAG AA)
- ✅ Focus indicators visible

**Legal Compliance:**
- ✅ Privacy Policy includes:
  - Data collection practices (email, analytics)
  - Cookie usage disclosure
  - Third-party services (Shopify, ConvertKit, GA4, Meta)
  - User rights (GDPR, CCPA)
  - Contact for privacy questions
- ✅ Terms of Service includes:
  - Acceptable use
  - Intellectual property
  - Limitation of liability
  - Dispute resolution
- ✅ Refund Policy:
  - 60-day money-back guarantee
  - Return process
  - Refund timeline (5-7 business days)
- ✅ Shipping Policy:
  - Delivery times by region
  - Tracking information
  - Lost/damaged package protocol

**Security:**
- ✅ SSL certificate active (HTTPS)
- ✅ Shopify PCI compliance verified
- ✅ No sensitive data stored client-side
- ✅ Form inputs sanitized (XSS protection)

#### **Deliverables Week 4:**
- ✅ SEO fully optimized
- ✅ Page speed: 90+ mobile, 95+ desktop
- ✅ All functionality tested and working
- ✅ Legal compliance complete
- ✅ Ready for launch

---

## 🚀 **POST-LAUNCH: WEEKS 5-8 (P2 OPTIMIZATIONS)**

### **Week 5: Video Production**

**Hero Video Creation:**

**Option A: Professional Production** ($3,000-8,000)
- Hire videographer + editor
- Shoot at boxing gym
- 30-60 second cinematic loop
- Slow-motion training sequences
- Product application ritual
- Color grading for brand aesthetic

**Option B: DIY with iPhone** ($500-1,000)
- Rent lighting equipment
- Hire athlete models ($200-400)
- Film yourself with iPhone 13+ (4K)
- Edit in Final Cut Pro or DaVinci Resolve
- Stock music from Artlist or Epidemic Sound

**Shot List:**
1. 0:00-0:10 - Female fighter wrapping hands (close-up, slow motion)
2. 0:10-0:20 - Training montage (heavy bag, mitts, intensity)
3. 0:20-0:30 - Sweat, determination, power (close-ups)
4. 0:30-0:40 - Unwrapping hands, grabbing oil bottle
5. 0:40-0:50 - Applying oil to shoulders/forearms (ritual)
6. 0:50-0:60 - Reset pose, confident expression, product visible

**Integration:**
```html
<video autoplay loop muted playsinline class="hero-video">
    <source src="hero-video.mp4" type="video/mp4">
    <source src="hero-video.webm" type="video/webm">
</video>
```

**CSS:**
```css
.hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
    z-index: 1;
}
```

### **Week 6: Interactive Quiz**

**"Find Your Ritual" Quiz:**

**Questions:**
1. How often do you train?
   - 3-4x per week
   - 5-6x per week
   - 7+ per week (warrior mode)

2. What's your primary discipline?
   - Muay Thai / Boxing
   - BJJ / Grappling
   - Strength Training / CrossFit
   - Multiple disciplines

3. Biggest post-training challenge?
   - Dry, irritated skin
   - Muscle soreness
   - Low energy for next session
   - All of the above

4. Current recovery routine?
   - Stretch + water
   - Foam rolling + supplements
   - Full ritual (ice bath, massage, etc.)
   - What's a recovery routine? 😅

5. What matters most to you?
   - Skin that can handle training
   - Faster muscle recovery
   - Building a daily ritual
   - Looking strong AND feeling strong

**Results:**
- **The Grinder (3-4x/week):** Start with single bottle, build your ritual slowly
- **The Warrior (5-6x/week):** 2-bottle bundle recommended, you need consistency
- **The Champion (7+/week):** 3-bottle squad + subscription, recovery is non-negotiable

**Implementation:**
- Use Typeform ($29/month) or Google Forms (free)
- Embed with iframe or custom JS
- Results lead to personalized product recommendation
- Collect email at end of quiz

**Conversion Impact:** +10-15% (personalizes experience)

### **Week 7: Subscription Model**

**Shopify Subscription Setup:**

1. Install app: "Recharge Subscriptions" ($60/month + 1% transaction fee)
2. Create subscription option:
   ```
   Subscribe & Save 15%

   Single Bottle: $46/month (save $8)
   2-Bottle Bundle: $82/month (save $15)

   Benefits:
   - Never run out during training season
   - Free shipping always
   - Skip or cancel anytime
   - Early access to new products
   ```

3. Add to pricing section:
   ```html
   <div class="subscription-toggle">
       <input type="checkbox" id="subscribe" name="subscribe">
       <label for="subscribe">
           <strong>Subscribe & Save 15%</strong>
           <span class="badge">Most Popular</span>
       </label>
       <p class="subscription-benefits">
           ✓ Free shipping always<br>
           ✓ Skip or cancel anytime<br>
           ✓ Early access to new products
       </p>
   </div>
   ```

**Conversion Impact:** +25% customer lifetime value

### **Week 8: Retargeting Campaigns**

**Meta Ads Setup:**

**Audience Segments:**
1. **Visited but didn't buy** (retarget within 7 days)
2. **Added to cart but didn't checkout** (retarget within 3 days)
3. **Email subscribers** (nurture sequence)
4. **Past purchasers** (upsell bundles)

**Ad Creative:**
- Carousel: Ingredient breakdown
- Video: Athlete testimonials
- Static: Before/after results
- Story: Behind-the-scenes product creation

**Budget:**
- $300-500/month initial
- Target ROAS: 3:1 (spend $1, make $3)

**Google Ads:**
- **Search campaigns:** "recovery oil for athletes," "post-workout skincare women"
- **Display retargeting:** Banner ads on fitness sites
- **Shopping ads:** Product listings (if Shopify integrated)

**Budget:**
- $200-400/month
- Target CPA: <$30 per acquisition

---

## 📊 **SUCCESS METRICS & KPIs**

### **Week 1-4: Launch Phase**

| Metric | Target | How to Track |
|--------|--------|--------------|
| Page Load Time | <3 seconds | PageSpeed Insights |
| Mobile Performance Score | 90+ | PageSpeed Insights |
| Bounce Rate | <60% | Google Analytics 4 |
| Avg. Time on Page | >2 minutes | Google Analytics 4 |
| Scroll Depth (to CTA) | >70% | GA4 custom event |
| Email Capture Rate | 8-12% | ConvertKit + GA4 |
| Add-to-Cart Rate | 5-8% | Shopify Analytics |
| Conversion Rate | 3-5% | Shopify Analytics |
| Average Order Value | $75+ | Shopify Analytics |

### **Week 5-8: Optimization Phase**

| Metric | Target | How to Track |
|--------|--------|--------------|
| Conversion Rate | 6-8% | Shopify Analytics |
| Email Open Rate | 40-50% | ConvertKit |
| Email Click Rate | 8-12% | ConvertKit |
| Return Customer Rate | 15-20% | Shopify Analytics |
| Subscription Rate | 20-30% of purchases | Recharge |
| ROAS (Meta Ads) | 3:1+ | Meta Ads Manager |
| CPA (Google Ads) | <$30 | Google Ads |
| Customer LTV | $150+ | Shopify Analytics |

---

## 💰 **BUDGET BREAKDOWN**

### **Minimum Viable Launch** ($1,500-3,000)

| Item | Cost | Priority |
|------|------|----------|
| Stock Photography | $200-500 | P0 |
| Product Photography | $300-800 | P0 |
| Shopify (3 months) | $117-315 | P0 |
| ConvertKit (3 months) | $87 | P1 |
| Domain Name | $15-30 | P0 |
| SSL Certificate | Free (via host) | P0 |
| **Total** | **$719-1,732** | |

### **Professional Launch** ($5,000-10,000)

| Item | Cost | Priority |
|------|------|----------|
| Professional Photoshoot | $2,000-5,000 | P0 |
| Hero Video Production | $3,000-8,000 | P2 |
| Shopify + Apps (6 months) | $300-800 | P0 |
| Email Marketing (6 months) | $174-350 | P1 |
| Meta Ads (first month) | $500 | P2 |
| Google Ads (first month) | $300 | P2 |
| Influencer Partnership | $500-2,000 | P1 |
| **Total** | **$6,774-16,650** | |

### **ROI Projection**

**Conservative Scenario:**
- 1,000 visitors/month
- 5% conversion rate = 50 sales
- $54 average order = $2,700 revenue
- 40% margin = $1,080 profit/month
- Break-even: Month 2-3

**Optimistic Scenario:**
- 5,000 visitors/month (with ads)
- 7% conversion rate = 350 sales
- $75 average order (bundles) = $26,250 revenue
- 40% margin = $10,500 profit/month
- ROI: 200-300%

---

## 🎯 **LAUNCH DAY CHECKLIST**

**72 Hours Before:**
- ✅ Final content review
- ✅ Load testing (simulate 100+ concurrent users)
- ✅ Backup site files
- ✅ Payment gateway test transactions
- ✅ Customer service email setup
- ✅ Prepare launch announcement (email, social)

**24 Hours Before:**
- ✅ DNS propagation check (if new domain)
- ✅ SSL certificate verified
- ✅ Analytics tracking verified (send test events)
- ✅ Email automation tested (send yourself through funnel)
- ✅ Inventory levels confirmed in Shopify
- ✅ Team briefing (if applicable)

**Launch Hour:**
- ✅ Go live (remove "coming soon" if applicable)
- ✅ Send launch email to existing list
- ✅ Post on social media (Instagram, Facebook, Twitter)
- ✅ Activate Meta Pixel + GA4 tracking
- ✅ Monitor site performance (Hotjar, GA4 real-time)
- ✅ Respond to first customer inquiries immediately

**First 48 Hours:**
- ✅ Monitor conversion funnel for drop-offs
- ✅ Check for broken links/images
- ✅ Gather initial customer feedback
- ✅ Adjust messaging based on early data
- ✅ Thank early customers (build loyalty)

---

## 🔄 **ONGOING OPTIMIZATION (Monthly)**

### **Month 1: Data Collection**
- Review analytics dashboards daily
- Identify high-exit pages
- Track which traffic sources convert best
- Collect customer feedback via email

### **Month 2: First Optimizations**
- Implement winning A/B test variants
- Adjust pricing/bundles based on data
- Expand social proof (add new testimonials)
- Launch first retargeting campaign

### **Month 3: Scale Strategies**
- Increase ad spend on profitable channels
- Launch affiliate program for micro-influencers
- Create blog content for SEO (3-5 posts/month)
- Develop referral program ("Give $10, Get $10")

### **Month 4-6: Product Expansion**
- Bundle with complementary products (resistance bands, wraps?)
- Limited edition scents (seasonal offerings)
- Wholesale to gyms/fitness studios
- Subscription box partnerships

---

## 📞 **SUPPORT & TROUBLESHOOTING**

### **Common Issues & Solutions**

**Issue 1: Low Traffic**
- Solution: Increase social media presence, influencer partnerships, Meta ads
- Target: 1,000+ visitors/month by Month 2

**Issue 2: High Bounce Rate (>70%)**
- Solution: Improve hero section, add exit-intent offer, speed up load time
- A/B test: Different hero headlines/images

**Issue 3: Low Add-to-Cart Rate (<3%)**
- Solution: Adjust pricing, add urgency (stock counter), improve product imagery
- Test: Different price points or bundle configurations

**Issue 4: Cart Abandonment (>80%)**
- Solution: Email retargeting, reduce friction in checkout, offer free shipping
- Tool: Shopify abandoned cart recovery emails

**Issue 5: Poor Email Open Rates (<25%)**
- Solution: Improve subject lines, segment list, send at optimal times
- Test: Different send times (7am vs 7pm)

---

## ✅ **FINAL RECOMMENDATIONS**

### **Priority Order for Maximum ROI:**

1. **Week 1:** Professional product photography ($300-800) - Highest visual impact
2. **Week 2:** Shopify integration ($39/month) - Enables sales immediately
3. **Week 2:** ConvertKit email automation ($29/month) - 30% retargeting boost
4. **Week 3:** Collect 3-5 real athlete testimonials (free/trade) - 20% trust increase
5. **Week 4:** Meta Pixel + GA4 setup (free) - Data-driven optimization
6. **Week 5:** Hero video ($500-1,000 DIY) - 15% engagement boost
7. **Week 6:** Subscription model ($60/month Recharge) - 25% LTV increase
8. **Week 7:** Quiz funnel ($29/month Typeform) - 10% personalization lift
9. **Week 8:** Retargeting ads ($300-500/month) - 3:1 ROAS target

### **Skip/Delay These:**
- ❌ Expensive professional video ($3K+) until you've validated demand
- ❌ Multiple influencer partnerships until you've tested 1-2
- ❌ Blog/SEO content until you have product-market fit
- ❌ Custom checkout design until you're doing $10K+/month

---

## 🎓 **RESOURCES & TOOLS**

### **Photography:**
- Unsplash (free stock): https://unsplash.com/s/photos/female-boxer
- Adobe Stock: https://stock.adobe.com
- Local photographers: Thumbtack, Upwork, Instagram search

### **E-commerce:**
- Shopify: https://www.shopify.com
- Buy Button guide: https://help.shopify.com/en/manual/online-sales-channels/buy-button

### **Email Marketing:**
- ConvertKit: https://convertkit.com
- Mailchimp: https://mailchimp.com

### **Analytics:**
- Google Analytics 4: https://analytics.google.com
- Meta Pixel: https://business.facebook.com/events_manager
- Hotjar: https://www.hotjar.com

### **A/B Testing:**
- Google Optimize: https://optimize.google.com
- VWO: https://vwo.com

### **SEO:**
- Google Search Console: https://search.google.com/search-console
- Ahrefs (paid): https://ahrefs.com
- SEMrush (paid): https://semrush.com

### **Performance:**
- PageSpeed Insights: https://pagespeed.web.dev
- GTmetrix: https://gtmetrix.com
- TinyPNG (image compression): https://tinypng.com

### **Learning:**
- Shopify Academy: https://www.shopify.com/academy
- ConvertKit Creator Course: https://convertkit.com/creator-courses
- Google Analytics Academy: https://analytics.google.com/analytics/academy

---

**This roadmap transforms your 7/10 foundation into a 9/10 launch-ready page that converts visitors into loyal customers who build "Recovery as Power" into their daily warrior ritual.**

**Questions? Issues? Next steps? Let me know where you want to focus first.**
