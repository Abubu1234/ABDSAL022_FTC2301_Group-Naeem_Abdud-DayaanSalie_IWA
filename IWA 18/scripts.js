import { TABLES, COLUMNS, state, createOrderData, updateDragging } from './data.js'
import { createOrderHtml, html, updateDraggingHtml, moveToColumn } from './view.js'

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}

// created variable dragging for when order is being dragged in the global scope
var Dragging;
//created variable  
/**
 * This function is called when a user starts dragging an order.
 * It sets the active dragging column in the state object (data.js) 
 * to the column over which the order was originally located.
 * @param {Event} event 
 */
const handleDragStart = (event) => {
    Dragging = event.target.closest('.order')
    state.dragging.source = state.dragging.over
    id = beingDragged.dataset.id
}

/**
 * This function is called when a user stops dragging an order.
 * It moves the order to the new column and updates the HTML.
 * @param {Event} event 
 */
const handleDragEnd = (event) => {
    event.preventDefault()
    const move = state.dragging.over
    moveToColumn(id, move)
    updateDraggingHtml({ over: column })
}


const handleHelpToggle = (event) => {
// modal shows dialog of hidden text 
    html.help.overlay.showModal()
    // moved html.help.cancel.addEventListener('click') into handleHelpToggl
    html.help.cancel.addEventListener('click',() => html.help.overlay.close())
}
html.other.help.addEventListener('click', handleHelpToggle)

const handleAddToggle = (event) => {
    html.add.overlay.showModal()
    html.add.cancel.addEventListener('click',() => html.add.overlay.close())
}
html.other.add.addEventListener('click', handleAddToggle)

/**
 * When the "Add" button in the add Order overlay is clicked, then this 
 * will handle the addition of the new order to the "Ordered" column. 
 * @param {Event} event 
 */
const handleAddSubmit = (event) => {
    event.preventDefault();

      /* created the props object required for the createOrderData function */
      const props = {
        title: html.add.form.title.value,
        table: html.add.form.table.value,
        column: html.edit.column.value
    };
    const orderData = createOrderData(props);
    //create a new object 
    const order = orderData;
    const orderHtml = createOrderHtml(order);
    //to move the order to the "ordered" column
    const orderedColumn = html.columns.or                 dered;
    orderedColumn.appendChild(orderHtml);
    //makes the form empty after submission
    html.add.form.reset();

    // will close the overlay before adding the orders to html
    html.add.overlay.close();
    html.other.add.focus();

}
html.add.form.addEventListener('submit', handleAddSubmit)


const handleEditToggle = (event) => {
    const { target } = event;

    const editOpen = document.querySelector('.order')

    if (target == editOpen) {
        html.edit.overlay.showModal()
    }

    if (target == html.edit.cancel) {
        html.edit.overlay.close()
    }
}

/**
 * This function is called when a user submits the "Edit Order".
 * It extracts the data entered in the form, removes the old order,
 * creates a new order data object, creates a new HTML element, and
 * appends the HTML element.
 * .value is used to access the 'title', 'table', and 'column' input.
 * @param {Event} event 
 */
const handleEditSubmit = (event) => {
    event.preventDefault();
    const order = document.querySelector('.order')
    order.remove()
    const data = {
        title: html.edit.title.value,
        table: html.edit.table.value,
        column: html.edit.column.value,
    }
    const orderData = createOrderData(data)
    const orderHtml = createOrderHtml(orderData)
    const columns = document.querySelector(`[data-column="${data.column}"]`)
    columns.appendChild(orderHtml)
    html.edit.overlay.close()
}

/**
 * This function is called when a user clicks "delete" on
 * the "Edit Order" form.
 * It removes the order and close the modal.
 * @param {Event} event 
 */
const handleDelete = (event) => {
    const { target } = event

    if (target == html.edit.delete) {
        document.querySelector('.order').remove()
    }

    html.edit.overlay.close()
}





html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)




for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}