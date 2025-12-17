import { useState } from "react";

export const FocusBlurEvents = () => {

    const [open, setOpen] = useState(false);

    return(
        <div>
            <input type="text" onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} />
            {open && (<ul>
                <li>India</li>
                <li>Pakistan</li>
                <li>China</li>
                </ul>)}
        </div>
    )
}