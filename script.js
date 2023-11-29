$(document).ready(function () {
    $("#search").autocomplete({
        source: searchTags
    });

    $('[data-bs-toggle="tooltip"]').tooltip();

    $('#cardCarousel').carousel();



});
function toggleStatus() {
    var avatarLogo = document.getElementById('avatar-logo');
    avatarLogo.classList.toggle('online');
    avatarLogo.classList.toggle('offline');
}


$('.card-footer img[data-bs-toggle="tooltip"]').on('click', function () {
    // Clone the clicked card and append it to the Offcanvas body
    var cardClone = $(this).closest('.card').clone();
    $('#bookmarkedCourses').append(cardClone);

    // Show the Offcanvas
    $('#bookmarkOffcanvas').offcanvas('show');
});

