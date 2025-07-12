// app/stories/[slug]/page.js
import { notFound } from "next/navigation";

const blogs = [
  {
    slug: "how-bees-communicate",
    title: "How Bees Communicate",
   
    image: "/images/bees10.jpg",
    content: `
     Bees have fascinating ways to communicate with each other, primarily through dances and 
     chemical scents.The most famous method is the "waggle dance," which a forager bee performs 
     to share the location of a food source.The angle of the dance points to the direction of
     the food relative to the sun. The duration of the dance tells the other bees how far away it is.
     Bees also release chemical signals called pheromones to send alarms, identify their queen,
     These clever communication methods allow the entire colony
     to work together as a single, organized unit.
    `
  },
  {
    slug: "why-bees-matter",
    title: "Why Bees Matter",
   
    image: "/images/bees1.jpg",
    content: `
    Bees are incredibly important for the health of our planet and our food supply.
     Their most crucial job is pollination, the process of transferring pollen between plants,
      which allows them to produce fruits, seeds, and vegetables. It is estimated that about one-third
       of the food we eat depends on the work of pollinators like bees. Without them, we would have far l
       ess access to nutritious foods like apples, almonds, and broccoli. Bees also help maintain healthy 
       ecosystems by pollinating wildflowers that support other wildlife. In short, these tiny insects are 
       essential for biodiversity and ensuring we have food on our tables.
    `
  },
  {
    slug: "supporting-biodiversity",
    title: "Supporting Biodiversity Through Beekeeping",
    image: "/images/bees6.jpg",
    content: `
      Beekeeping plays a vital role in maintaining and enhancing local biodiversity by promoting 
      healthy pollination of plants and flowers. By supporting bee populations, beekeepers help 
      ensure the survival of many wild plants, which in turn provide habitats and food for various 
      animals and insects. Sustainable beekeeping practices encourage the growth of diverse ecosystems 
      that benefit both agriculture and the environment. Through careful management, beekeepers contribute 
      to the balance of nature, supporting the interconnected web of life. Ultimately, beekeeping becomes more
       than honey production — it’s a powerful tool for conserving biodiversity and ecosystem health.
    `
  },
  {
    slug: "ancient-art-of-beekeeping",
    title: "The Ancient Art of Beekeeping in Rwanda",
   
    image: "/images/bees5.jpg",
    content: `
     Rooted in centuries-old traditions, Rwandan beekeeping blends deep cultural knowledge
      with respect for nature’s rhythms. Local beekeepers have long crafted traditional hives 
      from natural materials, passing down wisdom through generations. Today, these ancient methods 
      
      are carefully combined with modern practices to support sustainable honey production and healthy
       bee populations. Beyond harvesting honey, beekeeping is a cultural heritage that fosters community 
       bonds and pride. Through this enduring art, Rwanda preserves its rich history while nurturing both
        bees and biodiversity.
    `
  },
  {
    slug: "sustainable-honey-journey",
    title: "From Hive to Table: Our Sustainable Honey Journey",
   
    image: "/images/bees3.jpg",
    content: `
      From the buzzing hives nestled in natural landscapes to the carefully hand-harvested honeycombs,
       our journey prioritizes both bee welfare and product quality. Each drop of honey tells the story
        of thriving wildflowers, healthy bee colonies, and sustainable beekeeping practices that respect
         the delicate balance of nature. We avoid harmful chemicals and over-harvesting to ensure that our
          bees remain strong and productive for seasons to come. Through responsible processing, we preserve
           the honey’s rich flavor, nutrients, and natural enzymes. Ultimately, what reaches your table is more
            than honey — it’s a symbol of our commitment to environmental stewardship and authentic taste.
    `
  },
  {
    slug: "health-benefits-of-raw-honey",
    title: "The Health Benefits of Raw Honey",
    image: "/images/bees4.jpg",
    content: `
      Raw honey is packed with natural nutrients, antioxidants, and enzymes
       that provide numerous health benefits. Unlike processed honey, raw honey 
       retains its antibacterial and anti-inflammatory properties, making it a natural
        remedy for soothing sore throats and healing wounds. It also supports digestive
         health by promoting good gut bacteria. Many people use raw honey as a natural energy
          booster and immune system enhancer. Overall, incorporating raw honey into your diet can
           contribute to better overall wellness and vitality.
    `
  }
];

export default function StoryPage({ params }) {
  const story = blogs.find((item) => item.slug === params.slug);

  if (!story) {
    notFound(); 
  }

  return (
    <main className="max-w-3xl rounded-4xl border-amber-100 bg-amber-200 mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-amber-800 mb-4">{story.title}</h1>
      
      <img
  src={story.image}
  alt={story.title}
  className="mx-auto mb-6  rounded-lg shadow w-full md:w-2/3"
 />

      <div
        className="prose prose-amber leading-relaxed text-black"
        dangerouslySetInnerHTML={{ __html: story.content }}
      />
    </main>
  );
}
