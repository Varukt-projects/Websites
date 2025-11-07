import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { blogPosts } from "@/lib/blog"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const communityPost = blogPosts.find((p) => p.category === post.category && p.id !== post.id)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-96 overflow-hidden">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-8 md:p-12">
            <Link href="/experiences" className="flex items-center gap-2 text-white/80 hover:text-white mb-4">
              <ArrowLeft size={20} />
              Back to Stories
            </Link>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Meta Info */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary border-b border-border">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{post.readTime}</span>
          </div>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{post.category}</span>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
          <div className="text-foreground leading-relaxed whitespace-pre-wrap">{post.content}</div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-semibold text-foreground mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-background text-foreground border border-border rounded-full text-sm hover:border-primary transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Community Posts Grid */}
      {communityPost && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12">From Our Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link key={communityPost.id} href={`/experiences/${communityPost.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={communityPost.image || "/placeholder.svg"}
                      alt={communityPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-accent text-xs font-semibold mb-2">{communityPost.category}</span>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-3 line-clamp-2">
                      {communityPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex-grow line-clamp-2">{communityPost.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4 mt-4">
                      <span>{new Date(communityPost.date).toLocaleDateString()}</span>
                      <span>{communityPost.readTime}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
