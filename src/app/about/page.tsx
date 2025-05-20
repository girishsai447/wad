
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import { Users, Target, ShoppingBag, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">About ShopWave</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Your premier destination for quality products and an unparalleled shopping experience.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image 
            src="https://placehold.co/600x400.png" 
            alt="ShopWave Team Working" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-xl"
            data-ai-hint="team collaboration"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-foreground">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded with a passion for connecting people with products they love, ShopWave started as a small idea that blossomed into a thriving online marketplace. We believe that shopping should be simple, enjoyable, and inspiring.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our journey has been driven by a commitment to quality, customer satisfaction, and innovation. We continuously strive to enhance our platform, expand our offerings, and create a community where everyone can find something special.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center text-foreground">What We Stand For</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-2 inline-block">
                <Target className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              To provide a seamless and enjoyable shopping experience by offering a diverse range of high-quality products, exceptional customer service, and a user-friendly platform.
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-2 inline-block">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              To be the most trusted and innovative e-commerce platform, constantly adapting to meet the evolving needs of our customers and setting new standards in online retail.
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-2 inline-block">
                <Heart className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Customer-centricity, Integrity, Quality, Innovation, and Community. These principles guide every decision we make and every interaction we have.
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-foreground">Meet Our Team (Placeholder)</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We are a diverse group of passionate individuals dedicated to making ShopWave the best it can be.
        </p>
        <div className="mt-8 flex justify-center">
          <Users className="h-16 w-16 text-primary" />
        </div>
         <p className="mt-4 text-sm text-muted-foreground">(More detailed team section coming soon!)</p>
      </section>
    </div>
  );
}
