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

    //Task 5 - Inline Editing of Support Tickets

    //Creating a button that will serve as a way to edit a name and position of an employee.
    const editButton = document.createElement("button")
    editButton.textContent = "Edit Details"

    //Adding an event listener for the edit button to allow for editing to commmence.
    editButton.addEventListener("click", (event) => {
        event.stopPropagation()

        //Creating a title input to allow for typing.
        const  titleInput = document.createElement("input")
        titleInput.value = title.textContent

        //Creating a description input to allow for typing.
        const explanationInput = document.createElement("input")
        explanationInput.value = explanation.textContent

        //Creating an urgency input to allow for typing.
        const urgencyInput = document.createElement("input")
        urgencyInput.value = urgency.textContent

        //Creating a save button that allows for all changes to be saved to the employee card.
        const saveButton = document.createElement("button")
        saveButton.textContent = "Save"

        //Replacing the title and description with the input fields when the edit button is pressed.
        ticketCard.replaceChild(titleInput, title)
        ticketCard.replaceChild(explanationInput, explanation)
        ticketCard.replaceChild(urgencyInput, urgency)
        

        //Adding the save button to the employee card when edit is pressed.
        ticketCard.appendChild(saveButton)

        //Adding an event listener to the save button to allow for the typed content to override the original.
        saveButton.addEventListener("click", (event) => {
            event.stopPropagation()

            //Setting the title and description equal to whatever is typed in the input fields.
            title.textContent = titleInput.value
            explanation.textContent = explanationInput.value
            urgency.textContent = urgencyInput.value

            //Replacing the input feilds with static text, now with the new typed text.
            ticketCard.replaceChild(title, titleInput)
            ticketCard.replaceChild(explanation, explanationInput)
            ticketCard.replaceChild(urgency, urgencyInput)

            //Removes the save button after pressing it.
            ticketCard.removeChild(saveButton)
        })
    })

    //Adding the new elements to the card.
    ticketCard.appendChild(title)
    ticketCard.appendChild(explanation)
    ticketCard.appendChild(urgency)
    ticketCard.appendChild(resolveButton)
    ticketCard.appendChild(editButton)

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