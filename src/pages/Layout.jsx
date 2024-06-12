import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { apiRequests } from "../shared/api/apiRequests";
import { setUserData, setUserPicture } from "../shared/store/main";


const LayoutPage = (props) => {
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(false)
    const {mainSlice} = useSelector(state => state)
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            if (Cookies.get('accessToken')) {
                setLoading(true)
                if (Object.keys(mainSlice.user).length === 0) {
                    await apiRequests.user.getData()
                    .then((res) => {
                        dispatch(setUserData(res.data))
                        setLoading(false)
                        return res.data
                    })
                    .then((res) => {
                        apiRequests.user.getPicture(res.avatar_id)
                            .then((res) => {
                                dispatch(setUserPicture(URL.createObjectURL(res.data)))
                            })
                            .catch((e) => {
                                console.log('fetch picture: ', e)
                            })
                    })
                }
                setLoading(false)
            } else {
                navigate('/auth')
            }
        }
        getData()
    }, [mainSlice.isAuth])

    if (isLoading) {
        return <div>'Идёт загрузка...'</div>
    }

  return (
    <>
        <Outlet />
    </>
  )
};

export default LayoutPage;
<Outlet />