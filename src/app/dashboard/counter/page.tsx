import { CartCounter } from "@/shopping-car/components"



export const metadata = {
  title: "Shopping Cart",
  description: "Counter page",
  date: "2022-02-02",
  layout: "app",
  tags: ['counter', 'page']
}

export default function Counterpage() {
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos</span>
      <CartCounter value = {20}/>
    </div>

  )
}
