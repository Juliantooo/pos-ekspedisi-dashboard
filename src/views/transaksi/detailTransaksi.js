import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router-dom'

import DataTransaksi from './dataTransaksi'

const DetailTransaksi = ({ match }) => {
    const history = useHistory()
    const user = DataTransaksi.find(user => user.id.toString() === match.params.id)
    const userDetails = user ? Object.entries(user) :
        [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

    return (
        <CRow>
            <CCol lg={12}>
                <CCard>
                    <CCardHeader className="d-flex flex-row justify-content-between align-items-center">
                        Transaksi id : {match.params.id}
                        <CButton block color="primary" style={{ width: 150 }} onClick={() => history.push(`/transaksi/${match.params.id}/edit`)} >Edit Transaksi</CButton>
                    </CCardHeader>
                    <CCardBody>
                        <table className="table table-striped table-hover">
                            <tbody>
                                {
                                    userDetails.map(([key, value], index) => {
                                        return (
                                            <tr key={index.toString()}>
                                                <td>{`${key}:`}</td>
                                                <td><strong>{value}</strong></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default DetailTransaksi
