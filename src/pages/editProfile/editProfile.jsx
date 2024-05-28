import {useEffect, useState} from "react";
import styles from './editProfile.module.scss'
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiRequests } from "../../shared/api/apiRequests";
import { setUserData } from "../../shared/store/main";
import placeholder from '../../shared/images/placeholder_user.svg'
import step from '../../shared/images/previousStep.svg'
export const EditProfile = () => {
    const {user, isAuth} = useSelector(state => state.mainSlice)
    const [preview, setPreview] = useState(placeholder)
    const [image, setImage] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: ''
    });

    useEffect(() => {
        if (!isAuth) return navigate('/auth')
        const getData = async () => {
            await apiRequests.user.getPicture(user.avatar_id)
                .then((res) => {
                    setPreview(URL.createObjectURL(res.data))
                })
        }
        getData()
    }, [])

    const loadImg = async (e) => {
        if (e.currentTarget.files) {
            const file = e.currentTarget.files[0]
            const formData = new FormData()
            formData.append('document',e.currentTarget.files[0])
            await apiRequests.user.updatePicture(formData)
                .then((res) => {
                    setPreview(URL.createObjectURL(new Blob([file])))
                    setImage(file)
                    dispatch(setUserData({...user, avatar_id: res.data.file_id}))
                    alert('Фото успешно изменено')
                })
            
        }
    }

    const handleSubmit = async () => {
        await apiRequests.user.editData({
            first_name: formData.firstName,
            last_name: formData.lastName,
            avatar_id: user.avatar_id
        })
            .then((res) => {
                dispatch(setUserData(res.data))
                alert('Данные успешно измене')
            })
    };

    useEffect(() => {
        setFormData({
            firstName: user.first_name,
            lastName: user.last_name,
            phoneNumber: user.phone
        })
    }, [])

    return (
        <>
            <div className="mobile-container">
                <header className='mobile-header'>
                    <Link to={'/profile'}>
                        <img src={step} alt="" />
                    </Link>
                    <h4>Мои данные</h4>
                </header>
                <div className={styles.changePicture}>
                    <div className={styles.loadImageBody}>
                        <input onChange={loadImg} id={'file_input'} accept={'image/*'} type="file"/>
                        <label htmlFor={'file_input'}>
                            <span className={styles.choiceFileModule}>
                                <img src={preview} alt=""/>
                            </span>
                        </label>
                    </div>
                    <p>Изменить фото</p>
                </div>
                <div className={styles.form}>
                    <div>
                        <div className={'main-input'}>
                            <label>Имя</label>
                            <input value={formData.firstName} onChange={(e) => setFormData(
                                prev => ({
                                    ...prev,
                                    firstName: e.target.value
                                })
                            )} type="text"/>
                        </div>
                    </div>
                    <div>
                        <div className={'main-input'}>
                            <label>Фамилия</label>
                            <input value={formData.lastName} onChange={(e) => setFormData(
                                prev => ({
                                    ...prev,
                                    lastName: e.target.value
                                })
                            )} type="text"/>
                        </div>
                    </div>
                    <div>
                        <div className={'main-input'}>
                            <label>Номер телефона</label>
                            <input value={formData.phoneNumber} onChange={(e) => setFormData(
                                prev => ({
                                    ...prev,
                                    phoneNumber: e.target.value
                                })
                            )} type="text"/>
                        </div>
                    </div>
                </div>

                <button onClick={handleSubmit} className={'green-button'}>Сохранить изменения</button>
            </div>
        </>
    )
}