//the header of the site would be handled in this javascript file, so you don't have to copy paste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
import { flexNav } from "style.js";

document.querySelector(".writeHeader").innerHTML = `

<header>
    <a href="index.html"><img src="/assets/bis.png" class="img-fluid" alt="hehe"></a>
    <div class="navbar">
        <a class="navbar nav-item" href="/index.html">Home</a>
    </div>
</header>
<!--
<header style="background-color: gray">
    <a href="index.html"><img src="/assets/bis.png" class="img-fluid" alt="hehe"></a>
            <div class="navbar">
                <a class="navbar nav-item" href="/index.html">Home</a>
            </div>
        </header>
-->

`;
