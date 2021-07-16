import {
  Typography,
  makeStyles,
  TextField,
  ThemeProvider,
  createTheme,
  Button,
} from '@material-ui/core'
import { orange } from '@material-ui/core/colors'
import React from 'react'
import Sizes from './Sizes'
import Slideshow from './Slideshow'
import './CartModal2.css'
import PrimaryBtn from '../Primary Button/PrimaryBtn'
import { BsFillBookmarkFill } from 'react-icons/bs'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffc900',
    },
    secondary: orange,
  },
})

const CartModal2 = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="modalContainer">
          <div className="top">
            <div className="topLeft">
              <Slideshow />
            </div>
            <div className="topRight">
              <h3 style={{ paddingLeft: '5%', padding: '5%' }}>Formal Coat</h3>
              <p style={{ paddingLeft: '5%', paddingBottom: '5%' }}>
                Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem
                Ipsum dolor sit amet
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
            <h3 style={{ padding: '3% 0%', fontWeight: '400' }}>
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
          <div className="bottomButtons">
            <h5 style={{ padding: '2% 0%', fontWeight: '400' }}>
              Add Measurements
            </h5>
            <Button
              variant="contained"
              color="primary"
              size="large"
              disableElevation
            >
              Add to Cart
            </Button>
            <Button
              variant="contained"
              color="default"
              size="large"
              disableElevation
              startIcon={<BsFillBookmarkFill />}
              style={{ marginTop: '10px', width: 'auto' }}
            >
              Save for Later
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default CartModal2
