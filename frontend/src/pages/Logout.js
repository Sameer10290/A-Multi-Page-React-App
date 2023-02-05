import { redirect } from "react-router-dom"

export function action() {
    localStorage.clear('token')
    localStorage.clear('expiration')
    return redirect('/')
}