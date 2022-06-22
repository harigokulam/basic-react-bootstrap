import { Toast } from "bootstrap";
import { useEffect, useRef, useState } from "react";
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


function ToastDemo() {
    var [toast, setToast] = useState(false);
    const toastRef = useRef();

    useEffect(() => {
        var myToast = toastRef.current
        var bsToast = Toast.getInstance(myToast)

        if (!bsToast) {
            // initialize Toast
            bsToast = new Toast(myToast, {autohide: false})
            // hide after init
            bsToast.hide()
            setToast(false)
        }
        else{
            // toggle
            toast ? bsToast.show() : bsToast.hide()

        }
    })

    return (
    <div className="py-2">
        <button className="btn btn-success" onClick={() => setToast(toast => !toast)}>
            Toast {toast?'hide':'show'}
        </button>
        <div className="toast" role="alert" ref={toastRef}>
            <div className="toast-header">
                <strong className="me-auto">Bootstrap 5</strong>
                <small>4 mins ago</small>
                <button type="button" className="btn-close" onClick={() => setToast(false)} aria-label="Close"></button>
            </div>
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
        </div>
    </div>
    )


}


export default ToastDemo;