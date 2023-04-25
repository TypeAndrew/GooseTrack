import { useParams } from "react-router-dom"
// розшиврофка місяців щоб число місяця перевести в текст
const MONHTKEY = {
    0:'January',
    1:"February",
    2:'March',
    3:'April',
    4:'May',
    5:'June',
    6:'July',
    7:'August',
    8:'September',
    9:'October',
    10:'November',
    11:"December",
}

const ChooseDay = ()=>{
   const {currentDay}= useParams()
  const currentDays = currentDay.split(".")

return(<>
    <div>ChoseDay</div>
    <div> years:{currentDays[0]} monht:{ MONHTKEY[currentDays[1]]} day{currentDays[2]} </div>
</>
)
}

export default ChooseDay