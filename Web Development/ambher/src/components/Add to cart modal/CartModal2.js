import { Typography, makeStyles, TextField } from '@material-ui/core'
import React from 'react'
import Sizes from './Sizes'
import Slideshow from './Slideshow'
import './CartModal2.css'

const useStyles = makeStyles((theme) => ({}))

const CartModal2 = () => {
  const classes = useStyles()

  return (
    <>
      <div className="modalContainer">
        <div className="top">
          <div className="topLeft">
            <Slideshow />
          </div>
          <div className="topRight">
            <h3 style={{ paddingLeft: '5%', padding: '5%' }}>Formal Coat</h3>
            <p style={{ paddingLeft: '5%', paddingBottom: '5%' }}>
              Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum
              dolor sit amet
            </p>
            <div className="priceDetails">
              <table>
                <tr>
                  <td>Renting Price</td>
                  <td>Size</td>
                </tr>
                <tr>
                  <td>
                    <h4 style={{ fontWeight: '400' }}>Rs 500</h4>
                  </td>
                  <td className="sizes">
                    <Sizes size="7" />
                    <Sizes size="8" />
                    <Sizes size="9" />
                  </td>
                </tr>
                <tr>
                  <td>Quantity</td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      id="outlined-basic"
                      label="Enter"
                      variant="outlined"
                      placeholder="1"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Start Date</td>
                  <td>End Date</td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      id="date"
                      type="date"
                      variant="outlined"
                      placeholder="1"
                    />
                  </td>
                  <td>
                    <TextField
                      id="date"
                      type="date"
                      variant="outlined"
                      placeholder="1"
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h3 style={{ padding: '5% 0%', fontWeight: '400' }}>
            Tailor your measurements
          </h3>
          <div className="Measurements">
            <TextField
              id="outlined-basic"
              label="Enter"
              variant="outlined"
              placeholder="1"
            />
            <TextField
              id="outlined-basic"
              label="Enter"
              variant="outlined"
              placeholder="1"
            />
            <TextField
              id="outlined-basic"
              label="Enter"
              variant="outlined"
              placeholder="1"
            />
            <TextField
              id="outlined-basic"
              label="Enter"
              variant="outlined"
              placeholder="1"
            />
            <TextField
              id="outlined-basic"
              label="Enter"
              variant="outlined"
              placeholder="1"
            />
            <TextField
              id="outlined-basic"
              label="Enter"
              variant="outlined"
              placeholder="1"
            />
          </div>
        </div>
        <h5 style={{ padding: '2% 0%', fontWeight: '400' }}>
          Add Measurements
        </h5>
        <h5 style={{ padding: '2% 0%', fontWeight: '400' }}>Add to cart</h5>
        <h5 style={{ padding: '0% 0%', fontWeight: '400' }}>Save for later</h5>
      </div>
    </>
  )
}

export default CartModal2
