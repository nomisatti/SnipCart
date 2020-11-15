import React from "react"

export default function Home() {
  return (

    <div>
      <button className="snipcart-add-item"
        data-item-id="starry-night"
        data-item-price="79.99"
        data-item-url="/paintings/starry-night"
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        data-item-name="The Starry Night">
        Add to cart
</button>
    </div>
  )
}
