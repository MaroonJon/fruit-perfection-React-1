import './App.css'
import {ReactComponent as ShoppingCart} from "/src/assets/winkelmandje.svg"

function App() {
    function logClick() {
        console.log('You clicked!');
      }
    return (<>
            <nav>
                <ul>
                    <li>
                        <a href="/">Shop</a>
                    </li>
                    <li>
                        <a href="/">Ons verhaal</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                </ul>
                <ShoppingCart className="shopping-cart-icon"/>
            </nav>
            <header>
                <h1>Fruit perfection</h1>
                <button type="button" onClick={(logClick) }>
                    Shop nu
                </button>
            </header>

            <main>
                <article className={"product"}>
                    <img
                        src="https://s3.eu-central-1.amazonaws.com/verseoogst-production/uploads/2017/01/o/v/e/overzicht_citroen.jpg"
                        alt="citroen _ boven_ de titel."
                    />
                    <h2 className={"product-name"}>Citroen</h2>
                    <p className={"product-description"}>
                        Een citroen is voor de meeste mensen te zuur om zo uit de hand
                        te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel.</p>
                </article>
                <article className={"product"}>
                    <img
                        src="https://sicarfarms.com/wp-content/uploads/2021/01/mx-lemon.png"
                        alt="citroen _ boven_ de titel."
                    />
                    <h2 className={"product-name"}>limoen</h2>
                    <p className={"product-description"}>
                        Limoen is familie van de citroen en de sinaasappel en behoort
                        tot de citrusvruchten (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen.</p>
                </article>
                <article className={"product"}>
                    <img
                        src="https://www.fritsevents.nl/wp-content/uploads/2015/11/ijsblokjes-20-kg.jpg"
                        alt="citroen _ boven_ de titel."
                    />
                    <h2 className={"product-name"}>IJsblokjes</h2>
                    <p className={"product-description"}>
                        LEen ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje. Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen.</p>
                </article>
            </main>
        </>

    )
}

export default App
