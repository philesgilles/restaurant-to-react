import React, { Component } from 'react';

class menu extends Component {
    state = {  }
    render() { 
        return (<div className="" id="page2">
    
        <div className="row justify-content-center mt-1 p-3">
                <div className="col border border-primary p-3">
                    <h1 className="font-weight-light text-center text-lg-left">
                        Menu
            </h1>
                    <hr className="mt-2 mb-5" />
                    <div className="col-12">
                        <div className="accordion" id="menuAccordeon">
                            <div className="card">
                                <div className="card-header align-items-center" id="headingOne">
                                    <span
                                        className="badge badge-primary badge-pill float-right mt-2"
                                    >9</span
                                    >
                                    <h2 className="mb-0 d-flex">
                                        <button
                                            className="btn btn-link"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#appetizers"
                                            aria-expanded="true"
                                            aria-controls="appetizers"
                                        >
                                            Appetizers
                      </button>
                                    </h2>
                                </div>

                                <div
                                    id="appetizers"
                                    className="collapse"
                                    aria-labelledby="headingOne"
                                    data-parent="#menuAccordeon"
                                >
                                    <div className="card-body">
                                        <div className="row text-center justify-content-around">
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Vegetable Minestrone 9 <br />
                                                    <span className="menuExpl">Pesto Crouton</span>
                                                </p>
                                            </div>

                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Spicy Lobster Bisque 14 <br />
                                                    <span className="menuExpl"
                                                    >Sherry Mascarpone, Taragon</span
                                                    >
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Baked Clams Oreganato 17 <br />
                                                    <span className="menuExpl"
                                                    >Littleneck Clams, Toasted Breadcrumbs, Garlic
                              Butter</span
                                                    >
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Eggplant Parmigiano 18 <br />
                                                    <span className="menuExpl"
                                                    >Roasted Eggplant, Marinara, Mozzarella</span
                                                    >
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Crispy Fried Calamari 19 <br />
                                                    <span className="menuExpl"
                                                    >Lemon, Fresh Parsley, Spicy Marinara</span
                                                    >
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Charred Octopus 21 <br />
                                                    <span className="menuExpl"
                                                    >Celery, Endive, Red Wine Vinaigrette, Fennel,
                              Oregano</span
                                                    >
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Spicy Tuna Tartare 22 <br />
                                                    <span className="menuExpl"
                                                    >Diced Yellow Fin Tuna, Avocado, Crispy Garlic,
                              Black Olive Dressing</span
                                                    >
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Salumi-Formaggi Platter 24 <br />
                                                    <span className="menuExpl"
                                                    >18-Month Old San Daniele Prosciutto, Italian
                              Cheeses, Assorted Salumi</span
                                                    >
                                                </p>
                                            </div>
                                            <div
                                                className="col-10 col-md-6 lead menuText border border-primary shadow p-3"
                                            >
                                                <p>
                                                    “The Meatball” 25 <br />
                                                    <span className="menuExpl leadSpan"
                                                    >16 ounces of Fresh Ground Imperial Wagyu, Italian
                                                        Sausage and Veal. Served with Fresh Whipped
                              Ricotta</span
                                                    >
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <span
                                        className="badge badge-primary badge-pill float-right mt-2"
                                    >6</span
                                    >
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-link collapsed"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#salads"
                                            aria-expanded="false"
                                            aria-controls="salads"
                                        >
                                            Salads
                      </button>
                                    </h2>
                                </div>
                                <div
                                    id="salads"
                                    className="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#menuAccordeon"
                                >
                                    <div className="card-body">
                                        <div className="row text-center justify-content-around">
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Mixed Greens 17<br />
                                                    <span className="menuExpl"
                                                    >House Lettuce Mix, Shaved Apples, Red Wine
                              Vinaigrette</span
                                                    >
                                                </p>
                                            </div>

                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Roasted Beets 18<br />
                                                    <span className="menuExpl"
                                                    >Goat Cheese, Citrus, Toasted Almonds, Sun Dried
                              Tomato Vinaigrette</span
                                                    >
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Classic Caesar 18<br />
                                                    <span className="menuExpl"
                                                    >Romaine Lettuce, Parmigiano Cheese, Garlic
                              Croutons</span
                                                    >
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    The Wedge 19<br />
                                                    <span className="menuExpl"
                                                    >Creamy Gorgonzola, Pancetta, Heirloom
                              Tomato</span
                                                    >
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Burrata 19<br />
                                                    <span className="menuExpl"
                                                    >Red and Yellow Cherry Tomatoes, Onion,
                              Pesto</span
                                                    >
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Chopped “Louie” 24<br />
                                                    <span className="menuExpl"
                                                    >Lobster, Shrimp, Assorted Vegetables, House
                              Vinaigrette</span
                                                    >
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <span
                                        className="badge badge-primary badge-pill float-right mt-2"
                                    >6</span
                                    >
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-link collapsed"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#rawbar"
                                            aria-expanded="false"
                                            aria-controls="rawbar"
                                        >
                                            Raw Bar
                      </button>
                                    </h2>
                                </div>
                                <div
                                    id="rawbar"
                                    className="collapse"
                                    aria-labelledby="headingThree"
                                    data-parent="#menuAccordeon"
                                >
                                    <div className="card-body">
                                        <div className="row text-center justify-content-around">
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Oysters on the Half Shell<br />
                                                    Half Dozen 18<br />
                                                    One Dozen 32<br />
                                                    <span className="menuExpl">Daily Selection</span>
                                                </p>
                                            </div>

                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Clams on the Half Shell<br />
                                                    Half Dozen 15<br />
                                                    One Dozen 28<br />
                                                    <span className="menuExpl">Littlenecks</span>
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Jumbo Shrimp Cocktail<br />
                                                    8 per piece<br />
                                                    <span className="menuExpl"
                                                    >Spicy Cocktail Sauce, Lemon</span
                                                    >
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Maine Lobster Cocktail 28<br />
                                                    <span className="menuExpl"
                                                    >Chilled Lobster, Fingerling Potato Chips, Garlic
                              Aioli</span
                                                    >
                                                </p>
                                            </div>
                                            <div
                                                className="col-10 row p-3 border border-primary shadow justify-content-around"
                                            >
                                                <div className="col-10 col-md-5 menuText">
                                                    <p>
                                                        Seafood Plateau Piccolo 85<br />
                                                        <span className="menuExpl"
                                                        >4 Jumbo Shrimp, 4 Oysters, 4 Littleneck Clams,
                                                            King Crab, Half Lobster,
                                Crabmeat Salad, Tuna Ceviche</span
                                                        >
                                                    </p>
                                                </div>
                                                <div className="col-10 col-md-5 menuText">
                                                    <p>
                                                        Seafood Plateau Grande 135<br />
                                                        <span className="menuExpl"
                                                        >6 Jumbo Shrimp, 8 Oysters, 8 Littleneck Clams
                                                            King Crab, Whole Lobster,
                                Crabmeat Salad, Tuna Ceviche, Scallop Salad</span
                                                        >
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingFour">
                                    <span
                                        className="badge badge-primary badge-pill float-right mt-2"
                                    >10</span
                                    >
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-link collapsed"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            Pastas
                      </button>
                                    </h2>
                                </div>
                                <div
                                    id="collapseThree"
                                    className="collapse"
                                    aria-labelledby="headingFour"
                                    data-parent="#menuAccordeon"
                                >
                                    <div className="card-body">
                                        <div className="row text-center justify-content-around">
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Spaghetti Tomato and Basil 22<br />
                                                    <span className="menuExpl">Onion, Garlic, Olive Oil</span>
                                                </p>
                                            </div>

                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Spaghetti Carbonara 27<br />
                                                    <span className="menuExpl"
                                                    >Pancetta, Prosciutto, Bacon, Onions, Cream Sauce</span
                                                    >
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Penne alla Vodka 28<br />
                                                    <span className="menuExpl">Onions, Prosciutto, Peas, Light Cream Sauce</span>
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Cavatelli Bolognese 28<br />
                                                    <span className="menuExpl">Sausage Bolognese Sauce, Fresh Ricotta</span>
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Chicken Agnolotti 28<br />
                                                    <span className="menuExpl">Wild Mushroom, Fontina, Sage</span>
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Rigatoni Melanzana 28<br />
                                                    <span className="menuExpl"
                                                    >Fresh Tomato, Roasted Eggplant, Bufala Mozzarella</span
                                                    >
                                                </p>
                                            </div>

                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Truffle Gnocchi 31<br />
                                                    <span className="menuExpl">Crema, Mushroom Ragu, Shaved Truffle</span>
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Penne Seafood Alfredo 33<br />
                                                    <span className="menuExpl"
                                                    >Shrimp, Scallops, Lobster Butter, Light Cream Sauce</span
                                                    >
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Spaghetti and Meatballs 34<br />
                                                    <span className="menuExpl">Imperial Wagyu, Fresh Ricotta, Ragu</span>
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Linguine with Mixed Seafood 38<br />
                                                    <span className="menuExpl"
                                                    >Shrimp, Scallops, Clams, Mussels, Spicy Red Sauce</span
                                                    >
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingSix">
                                    <span className="badge badge-primary badge-pill float-right mt-2">4</span>
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#grill"
                                            aria-expanded="false" aria-controls="grill">
                                            From the Grill
                      </button>
                                    </h2>
                                </div>
                                <div id="grill" className="collapse" aria-labelledby="headingSix" data-parent="#menuAccordeon">
                                    <div className="card-body">
                                        <div className="row text-center justify-content-around">
                                            <div className="col-12 menuText">
                                                <p>
                                                    WHOLE FISH<br />
                                                    <span className="menuExpl">Served with a Panzanella Salad, Extra Virgin Olive Oil and Capers</span>
                                                </p>
                                            </div>

                                            <div className="col-6 menuText">
                                                <p>Branzino 35<br /></p>
                                            </div>
                                            <div className="col-6 menuText">
                                                <p>Dorado 41<br /></p>
                                            </div>
                                            <div className="col-6 menuText">
                                                <p>Red Snapper 45<br /></p>
                                            </div>
                                            <div className="col-6 menuText">
                                                <p>Maine Lobster 55<br /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingFive">
                                    <span className="badge badge-primary badge-pill float-right mt-2">8</span>
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#houseSpecials"
                                            aria-expanded="false" aria-controls="houseSpecials">
                                            House Specialties
                      </button>
                                    </h2>
                                </div>
                                <div id="houseSpecials" className="collapse" aria-labelledby="headingFive" data-parent="#menuAccordeon">
                                    <div className="card-body">
                                        <div className="row text-center justify-content-around">
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Chicken Parmigiano 29<br />
                                                    <span className="menuExpl">Thinly Pounded Chicken, Marinara, Mozzarella</span>
                                                </p>
                                            </div>

                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Brick Oven Salmon Oreganato 31<br />
                                                    <span className="menuExpl">Seasoned Breadcrumbs, Lemon, White Wine, Garlic Butter</span>
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Chicken Marsala 32<br />
                                                    <span className="menuExpl">Breast of Chicken, Wild Mushrooms, Marsala Wine</span>
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Crispy Chicken “Dominick” 32<br />
                                                    <span className="menuExpl">White Balsamic, Potatoes, Red Chili Flakes</span>
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Grilled Yellow Fin Tuna<br />
                                                    <span className="menuExpl">Oven Roasted Tomatoes, Artichokes, Lemon Vinaigrette</span>
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Roasted Chilean Sea Bass 38<br />
                                                    <span className="menuExpl">Fresh Heirloom Tomato, Butter, Crispy Portabello</span>
                                                </p>
                                            </div>

                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Calabrese Shrimp 41<br />
                                                    <span className="menuExpl">Colossal Shrimp, Sautéed Red and Calabrese Peppers</span>
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-6 menuText">
                                                <p>
                                                    Rack Veal Chop 44 • 46<br />
                                                    <span className="menuExpl">Milanese or Parmigiano</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingSeven">
                                    <span className="badge badge-primary badge-pill float-right mt-2">4 + 1</span>
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#desserts"
                                            aria-expanded="false" aria-controls="desserts">
                                            Desserts
                      </button>
                                    </h2>
                                </div>
                                <div id="desserts" className="collapse" aria-labelledby="headingSeven" data-parent="#menuAccordeon">
                                    <div className="card-body">
                                        <div className="row text-center justify-content-around">
                                            <div className="col-12 menuText">
                                                <p>DESSERTS<br /> 10<br /></p>
                                            </div>

                                            <div className="col-6 menuText">
                                                <p>
                                                    Gelati and Sorbetti<br />
                                                    <span className="menuExpl">Daily Selections</span>
                                                </p>
                                            </div>
                                            <div className="col-6 menuText">
                                                <p>
                                                    Frutta Fresca<br />
                                                    <span className="menuExpl">Seasonal Fresh Fruit, Star Anise Syrup, Mint</span>
                                                </p>
                                            </div>
                                            <div className="col-6 menuText">
                                                <p>
                                                    Nonna’s Tiramisu<br />
                                                    <span className="menuExpl">Espresso-soaked Lady Fingers, Mascarpone Mousse</span>
                                                </p>
                                            </div>
                                            <div className="col-6 menuText">
                                                <p>
                                                    New York Cheesecake<br />
                                                    <span className="menuExpl">Amarena Cherries, Whipped Cream, Brulée</span>
                                                </p>
                                            </div>
                                            <div className="col-10 border border-primary shadow menuText p-3">
                                                <p>
                                                    Twenty Layer Peanut Butter Chocolate Cake 13<br />
                                                    <span className="menuExpl">Devils Food Cake, Peanut Butter Mascarpone</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-6 text-center">
                            <button
                                type='button'
                                className='btn btn-primary btn-lg'
                                data-toggle='modal'
                                data-target='#bookTable'
                            >
                                Book a table
            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div> );
    }
}
 
export default menu;