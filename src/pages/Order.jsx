import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import './Order.css'
import { useNavigate } from 'react-router-dom'

const Order = () => {

    const [when, setWhen] = useState('')
    const [who, setWho] = useState('')
    const [color, setColor] = useState('')
    const [flower, setFlower] = useState('')
    const [text, setText] = useState('')

    const toggleSelection = (stateSetter, selectedItem, item) => {
        stateSetter(prevState => prevState === item ? '' : item)
    }

    const navigate = useNavigate()

    const handleSelect = () => {
        
        navigate('/standby')

        console.log('제출양식', when, who, color, flower, text)
    }

  return (
    <div className='Order'>
        <TopBar />
        <div className='orderContainer'>
            <div className='qnaContainer'>
                <div className='orderQ'><div className='qBold'>언제</div> 꽃다발이 필요한가요?</div>
                <div className='orderA'>
                    {['생일', '기념일', '입학식', '졸업식', '축하', '프로포즈', '어버이날', '기타'].map((item, index) => (
                                <div
                                    key={index}
                                    className={`orderMenuBtn ${when === item ? 'selected' : ''}`}
                                    onClick={() => toggleSelection(setWhen, when, item)}
                                >
                                    {item}
                                </div>
                            ))}
                </div>
            </div>
            <div className='qnaContainer'>
                <div className='orderQ'><div className='qBold'>누구</div>에게 줄 꽃다발인가요?</div>
                <div className='orderA'>
                    {['본인', '친구', '연인', '부모님', '자녀', '형제·자매', '선생님', '기타'].map((item, index) => (
                                <div
                                    key={index}
                                    className={`orderMenuBtn ${who === item ? 'selected' : ''}`}
                                    onClick={() => toggleSelection(setWho, who, item)}
                                >
                                    {item}
                                </div>
                            ))}
                </div>
            </div>
            <div className='qnaContainer'>
                <div className='orderQ'>원하는 <div className='qBold'>색상</div>이 있나요?</div>
                <div className='orderA'>
                    {['빨간색', '주황색', '노란색', '하늘색', '보라색', '분홍색', '흰색', '기타'].map((item, index) => (
                                <div
                                    key={index}
                                    className={`orderMenuBtn ${color === item ? 'selected' : ''}`}
                                    onClick={() => toggleSelection(setColor, color, item)}
                                >
                                    {item}
                                </div>
                            ))}
                </div>
            </div>
            <div className='qnaContainer'>
                <div className='orderQ'>원하는 <div className='qBold'>꽃 종류</div>가 있나요?</div>
                <div className='orderA'>
                    {['장미', '해바라기', '튤립', '프리지아', '안개꽃', '카네이션', '은방울꽃', '기타'].map((item, index) => (
                                <div
                                    key={index}
                                    className={`orderMenuBtn ${flower === item ? 'selected' : ''}`}
                                    onClick={() => toggleSelection(setFlower, flower, item)}
                                >
                                    {item}
                                </div>
                            ))}
                </div>
            </div>
            <div className='qnaContainer'>
                <div className='orderQ'>원하는 <div className='qBold'>가격</div>이 있다면 적어주세요</div>
                <div>
                    <input type="number" min="0" placeholder="가격을 입력하세요" className='inputPrice' />
                </div>
            </div>
            <div className='BtnOrder' onClick={handleSelect}>꽃다발 제작하기</div>
        </div>
    </div>
  )
}

export default Order