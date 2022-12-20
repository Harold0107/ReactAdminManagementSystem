import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    Autocomplete
} from '@mui/material'
import { styled } from '@mui/system'

import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker,TimePicker } from '@mui/lab'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))


export default function Employee() {


    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const {
        username,
        firstName,
        creditCard,
        mobile,
        password,
        confirmPassword,
        gender,
        date,
        email,
    } = state


    const suggestions = [
        { label: 'Vadodara' },
        { label: 'Valsad' },
        { label: 'Bhavnagar'}
      
    ]

   const suggestionsCategory = [
    { label: 'A' },
    { label: 'B' },
    { label: 'C'},
    { label: 'D'}
  
]

const suggestionsPaymentTerms = [
    { label: '20%' },
    { label: '30%' },
    { label: '50%'},
   
  
]

  return (
    <Container>
    <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
            
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
               
            <Autocomplete
                options={suggestions}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="City"
                        variant="outlined"
                        fullWidth
                    />
                )}
            />

<LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        value={date}
                        onChange={handleDateChange}
                        renderInput={(props) => (
                            <TextField
                                {...props}
                                // variant="Outlined"
                                id="mui-pickers-date"
                                label="Batch End Date"
                                sx={{ mb: 2, width: '100%' }}
                            />
                        )}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>

                <TimePicker
          label="Time"
          value="10"
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />

</LocalizationProvider>

                <Autocomplete
                options={suggestionsCategory}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Category"
                        variant="outlined"
                        fullWidth
                    />
                )}
            />
                
                <TextField
                    label="Payment per Hours"
                    onChange={handleChange}
                    name="confirmPassword"
                    type="number"
                    value={confirmPassword || ''}
                    validators={['required']}
                   
                />
               
               <Autocomplete
                options={suggestionsPaymentTerms}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Payment Terms"
                        variant="outlined"
                        fullWidth
                    />
                )}
            />

               
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
               
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        value={date}
                        onChange={handleDateChange}
                        renderInput={(props) => (
                            <TextField
                                {...props}
                                // variant="Outlined"
                                id="mui-pickers-date"
                                label="Batch Start Date"
                                sx={{ mb: 2, width: '100%' }}
                            />
                        )}
                    />
                </LocalizationProvider>

                <TextField
                    label="Course Name with Code"
                    onChange={handleChange}
                    name="password"
                    type="text"
                    value={password || ''}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <TextField
                    label="Course Total Hours"
                    onChange={handleChange}
                    name="confirmPassword"
                    type="number"
                    value={confirmPassword || ''}
                    validators={['required']}
                   
                />

<TextField
                    label="Number of Students"
                    onChange={handleChange}
                    name="confirmPassword"
                    type="number"
                    value={confirmPassword || ''}
                    validators={['required']}
                   
                />
               
            </Grid>
        </Grid>
        <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                Submit
            </Span>
        </Button>
    </ValidatorForm>
</Container>
  )
}
