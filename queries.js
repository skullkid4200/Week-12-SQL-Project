const generateLogo = (response) => {

    let logoFile;

    if (response.Shape === 'Triangle') {
        logoFile = new Triangle(response.LogoColor, response.TextColor, response.Text).render();
    } else if (response.Shape === 'Circle') {
        logoFile = new Circle(response.LogoColor, response.TextColor, response.Text).render();
    } else {
        logoFile = new Square(response.LogoColor, response.TextColor, response.Text).render();
    }
    return logoFile;
}