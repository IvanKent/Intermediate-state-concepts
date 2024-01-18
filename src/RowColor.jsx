import './bg.css'
import RandomNumber from './RandomNumber'
export default function RowColor({colors}) {
    return(
        <div className='boxContainerUp'>
            <div className='boxContainer'>
                <RandomNumber colors={colors}/>
                <RandomNumber colors={colors}/>
                <RandomNumber colors={colors}/>
            </div>
            <div className='boxContainer'>
                <RandomNumber colors={colors}/>
                <RandomNumber colors={colors}/>
                <RandomNumber colors={colors}/>
            </div>
            <div className='boxContainer'>
                <RandomNumber colors={colors}/>
                <RandomNumber colors={colors}/>
                <RandomNumber colors={colors}/>
            </div>
        </div>

    )
}