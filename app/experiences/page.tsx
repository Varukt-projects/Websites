import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { blogPosts } from "@/lib/blog"
import { Calendar, User, Clock } from "lucide-react"

export default function ExperiencesPage() {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">Travel Stories & Guides</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and inspiring stories from our travelers and experts
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <Link href={`/experiences/${blogPosts[0].slug}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-accent font-semibold text-sm mb-2">Featured</span>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-background text-foreground border border-border rounded-full text-sm hover:border-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.id} href={`/experiences/${post.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-accent text-xs font-semibold mb-2">{post.category}</span>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-2">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
