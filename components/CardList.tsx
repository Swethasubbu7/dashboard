import Image from "next/image"
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

const PopularContent = [
  {
    id: 1,
    title: "Javascript Tutorial",
    badge: "Coding",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=300&q=80",
    count: 4300,
  },
  {
    id: 2,
    title: "Tech Trends 2025",
    badge: "Tech",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=300&q=80",
    count: 3200,
  },
  {
    id: 3,
    title: "The Future of AI",
    badge: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=300&q=80",
    count: 2400,
  },
  {
    id: 4,
    title: "React Hooks Explained",
    badge: "Coding",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80",
    count: 4300,
  },
  {
    id: 5,
    title: "Image Gen AI",
    badge: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=300&q=80",
    count: 3200,
  },
]

const latestTransaction = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "Sherin",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    count: 1300,
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Shreya",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    count: 2500,
  },
  {
    id: 3,
    title: "Subscription Renewal",
    badge: "Sandy",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    count: 1300,
  },
  {
    id: 4,
    title: "Payment for Services",
    badge: "Saro",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    count: 1300,
  },
  {
    id: 5,
    title: "Subscription Renewal",
    badge: "Lilly",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    count: 1300,
  },
]

const CardList = ({ title }: { title: string }) => {
  const list = title === "Popular Content" ? PopularContent : latestTransaction
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card key={item.id} className="flex items-center justify-between gap-4 p-4">
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center flex-1">
              <CardContent className="p-0">
                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                <Badge variant="secondary">{item.badge}</Badge>
              </CardContent>
              <CardFooter className="p-0 text-xs text-gray-500">
                {item.count / 1000}K
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CardList
