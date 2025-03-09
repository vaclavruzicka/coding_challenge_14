//Task 2 - Adding Employee Cards Dynamically

//Selecting the ticket container with the fet element by ID.
const ticketcontainer1 = document.getElementById("ticketContainer")

//Creating a function that creates an employee card given a customer's name, problem, and priority level.
function createTicketCard(name, description, priorityLevel){
    const ticketCard = document.createElement("div")

    //Using assign attribute to assign a class and an id to the ticket card.
    ticketCard.setAttribute("class", priorityLevel)
    ticketCard.setAttribute("id", name)

    //Creating a title that displys the customer's name.
    const title = document.createElement("h4")
    title.textContent = name

    //Creating a description that displays the customer's complaint.
    const explanation = document.createElement("p")
    explanation.textContent = description

    //Creating an urgency indecator using priority level.
    const urgency = document.createElement("p")
    urgency.textContent = priorityLevel

    //Creating a button that when clicked, will resolve (remove) the ticket card.
    const resolveButton = document.createElement("button")
    resolveButton.textContent = "Resolve"

    //Task 4 - Implementing Ticket Resolution with Event Bubbling

    //Makes it so that the resolve button removes the ticket card.
    resolveButton.addEventListener("click", (event) => {
        event.stopPropagation()
        ticketCard.parentNode.removeChild(ticketCard)
    })

    //Adding the new elements to the card.
    ticketCard.appendChild(title)
    ticketCard.appendChild(explanation)
    ticketCard.appendChild(urgency)
    ticketCard.appendChild(resolveButton)

    return ticketCard
}

//Creating three new tickets with the creatTicketCard function.
ticketcontainer1.appendChild(createTicketCard("Jordan Love", "Website Crashed.", "Medium"))
ticketcontainer1.appendChild(createTicketCard("Josh Jacobs", "Virus Infected my PC from website.", "High"))
ticketcontainer1.appendChild(createTicketCard("Christian Watson", "Need to return product.", "Low"))
ticketcontainer1.appendChild(createTicketCard("Zach Tom", "Website crashed my entire PC.", "High"))

//Task 3 - Converting NodeLists to Array for Bulk Updating

//Creating a node list for all high priority tickets.
const highUrgencyTicketNodeList = document.querySelectorAll(".High")

//Converting the node list into an array.
const highUrgencyTicketArray = Array.from(highUrgencyTicketNodeList)

//Using for each to make all high priority tickets be highlighted red.
highUrgencyTicketArray.forEach((card) => {
    card.style.backgroundColor = "red"
})

//Task 4 - Continued

//Adds an event listener so that when a ticket is clicked, not on tbe resolve button, there is a console message saying a ticket has been clicked.
ticketcontainer1.addEventListener("click", () => {
    console.log("Ticket Clicked")
})