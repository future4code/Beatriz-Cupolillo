import { useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { goToLogin} from '../Routes/Coordinator'

export const useUnprotectPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            // goToRecipesFeed(history)
        }
    }, [history])

}
