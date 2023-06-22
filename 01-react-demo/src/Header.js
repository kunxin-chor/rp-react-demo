
import {Fragment} from 'react';

// export default is the same module.export = <????>
// export out the variable/function etc. for other files to import from
export default function Header() {
    // JSX can only have one top level element/component
    return <> 
        <h1>Header</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </nav>
      </>
}