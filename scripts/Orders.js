import {  getCustomOrders, getMetals } from "./database.js"


const buildOrderListItem = (order) => {


const customOrders = getCustomOrders()
const metals = getMetals()

const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
const totalCost = foundMetal.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})


    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

