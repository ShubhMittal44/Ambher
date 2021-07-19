import {
  Typography,
  makeStyles,
  TextField,
  ThemeProvider,
  createTheme,
  Button,
} from '@material-ui/core'
import { white } from '@material-ui/core/colors'
import React from 'react'
import Sizes from './Sizes'
import Slideshow from './Slideshow'
import './CartModal2.css'
import PrimaryBtn from '../Primary Button/PrimaryBtn'
import { BsFillBookmarkFill, BsPlus } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffc900',
    },
    secondary: {
      main: '#ffffff',
      light: '#000000',
    },
  },
})

const CartModal2 = () => {
  return (
    <div className="modalBody">
      <ThemeProvider theme={theme}>
        <div className="modalContainer">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<AiOutlineClose />}
            disableElevation
            style={{ marginTop: '10px', width: 'auto' }}
          ></Button>
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
                        margin="dense"
                        size="small"
                        width="0.2"
                        variant="outlined"
                        placeholder="1"
                      />
                    </td>
                    <td>
                      <TextField
                        id="date"
                        type="date"
                        size="small"
                        width="0.2"
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
            <Button
              variant="outlined"
              color="secindary dark"
              size="large"
              disableElevation
              startIcon={<BsPlus />}
              style={{ marginTop: '10px', width: 'auto' }}
            >
              Add Measurements
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              style={{ marginTop: '10px', width: 'auto' }}
            >
              Add to Cart
            </Button>
            <Button
              variant="contained"
              color="secondary"
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
    </div>
  )
}

export default CartModal2
