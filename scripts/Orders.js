import {  getCustomOrders, getMetals, getSizes, getStyles } from "./database.js"


const buildOrderListItem = (order) => {

const customOrders = getCustomOrders()
const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()

const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
const totalCost = foundMetal.price

const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)
const totalCost = foundSize.price


const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)
const totalCost = foundStyle.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}


export const Orders = () => {
  
    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

