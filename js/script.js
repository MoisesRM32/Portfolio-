console.log("Portfolio loaded successfully.");


const projectDialog = document.querySelector("#project-dialog");
const openDialogButton = document.querySelector("#open-project-dialog");
const closeDialogButton = document.querySelector("#close-project-dialog");

if (projectDialog && openDialogButton && closeDialogButton) {
    openDialogButton.addEventListener("click", () => {
        projectDialog.showModal();
    });

    closeDialogButton.addEventListener("click", () => {
        projectDialog.close();
    });
}