import { useParams } from "react-router-dom"
import css from './ChooseDay.module.css';
import { ColumnTasksList } from "components/TasksColumn/TasksColumn";
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

  // const handleCurrentPage = ({ isActive }) => {
  //   return isActive ? css.isActive : '';
  // };

  return (
    <>
      <div>
        <div className={css.selector}>
          <span className={css.dateToday}>
            {currentDays[2]} {MONHTKEY[currentDays[1]]} {currentDays[0]}
          </span>
          <div className={css.dayChange}>
            <button
              // onClick={handleChangMonthBack}
              type="button"
              // disabled={btnBack}
              className={css.btn_left}
            >
              <img widt='10px' src="./left.svg" alt="<" />
            </button>
            <button
              // onClick={handleChangMonthForward}
              type="button"
              className={css.btn_ringt}
            >
              <img widt='10px' src="./ringt.svg" alt=">" />
            </button>
          </div>
            <ul className={css.viue}>
            <li>
              {/* <NavLink */}
                {/* // to={`month/${year}.${month}`} */}
                {/* // className={data => handleCurrentPage(data) + ' ' + css.btn_changL} */}
              {/* > */}
                Month
              {/* </NavLink> */}
            </li>
            <li>
              {/* <NavLink */}
                {/* // to={`day/${currentDay}`} */}
                {/* // className={data => handleCurrentPage(data) + ' ' + css.btn_changR} */}
              {/* > */}
                Day
              {/* </NavLink> */}
            </li>
          </ul>
        </div>
      <div className={css.week}>
        
      </div>
        <ul className={css.calendar}>
          <ColumnTasksList/>
          <ColumnTasksList />
          <ColumnTasksList />
        </ul>
      </div>
    </>
  )
}

export default ChooseDay