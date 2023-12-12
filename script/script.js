function scrollToSection(sectionID) {
    var section = document.getElementById(sectionID);
    section.scrollIntoView({ behavior: 'smooth' });
}