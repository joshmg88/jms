import axios from 'axios'

const GET_EMPLOYEES = 'GET_EMPLOYEES'
const ADD_EMPLOYEES = 'ADD_EMPLOYEES'
const EDIT_PROFILE = 'EDIT_PROFILE'
const GET_PROFILE = 'GET_PROFILE'

export function getEmployees() {
    return {
        type: GET_EMPLOYEES,
        payload: axios.get('/api/employees')
    }
}

export function addEmployees(employees) {
    return {
        type: ADD_EMPLOYEES,
        payload: axios.post('/api/employees', employees)
    }
}

export function editProfile(profile) {
    return {
        type: EDIT_PROFILE,
        payload: axios.put('/api/editProfile', profile)
    }
}

export function getProfile(user) {
    return {
        type: GET_PROFILE,
        payload: axios.get(`/api/getProfile/${user}`)
    }
}

const initialState = {
    employees: [],
    didErr: false
}

export default function employeeReducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_EMPLOYEES}_FULFILLED`:
        case `${ADD_EMPLOYEES}_FULFILLED`:
        case `${GET_PROFILE}_FULFILLED`:
        case `${EDIT_PROFILE}_FULFILLED`:
            return {
                ...state,
                employees: action.payload.data
            };
        case `${GET_EMPLOYEES}_REJECTED`:
        case `${ADD_EMPLOYEES}_REJECTED`:
        case `${EDIT_PROFILE}_REJECTED`:
        case `${GET_PROFILE}_REJECTED`:
            return {
                ...state,
                didErr: true
            }
        default:
            return state;
    }
}
