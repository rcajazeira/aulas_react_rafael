import { Scanner } from "@yudiel/react-qr-scanner"

export default function QrCode () {
    return (
        <> 
        <div>
            <Scanner onScan={(results)=>{console.log(results)}}/>
        </div>
        </>
    )
}
    
