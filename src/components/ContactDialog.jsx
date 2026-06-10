import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Box,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const dialogConfig = {
  contact: {
    title: 'Contact Abira',
    subtitle: 'Have a question or need support? Drop your details and we’ll get back to you fast.',
    buttonText: 'Send Message',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'company', label: 'Company / Organization', type: 'text', required: false },
      { name: 'service', label: 'Service of interest', type: 'text', required: false },
      { name: 'message', label: 'Your question or note', type: 'text', required: true, multiline: true, minRows: 4 },
    ],
  },
  scheduleCall: {
    title: 'Schedule a Call',
    subtitle: 'Pick a time and share the topic so we can prepare a tailored conversation.',
    buttonText: 'Request Call',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Phone number', type: 'text', required: false },
      { name: 'preferredTime', label: 'Preferred date/time', type: 'text', required: true },
      { name: 'timezone', label: 'Timezone', type: 'text', required: false },
      { name: 'message', label: 'Call purpose / topic', type: 'text', required: true, multiline: true, minRows: 4 },
    ],
  },
}

const ContactDialog = ({ open, onClose, dialogType = 'contact' }) => {
  const config = dialogConfig[dialogType] || dialogConfig.contact

  const [values, setValues] = useState(() => {
    const initial = {}
    Object.values(dialogConfig).forEach(({ fields }) => {
      fields.forEach((field) => {
        initial[field.name] = ''
      })
    })
    return initial
  })
  const [status, setStatus] = useState({ severity: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)

  useEffect(() => {
    if (!open) {
      setValues((prev) => {
        const reset = {}
        Object.keys(prev).forEach((key) => {
          reset[key] = ''
        })
        return reset
      })
      setStatus({ severity: '', message: '' })
      setShowSnackbar(false)
      setSubmitting(false)
    }
  }, [open])

  const handleChange = (fieldName) => (event) => {
    setValues((prev) => ({ ...prev, [fieldName]: event.target.value }))
  }

  const handleCloseSnackbar = () => {
    setShowSnackbar(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)

    const subject = `${config.title} - ${dialogType}`
    const fieldLines = config.fields
      .map((field) => `${field.label}: ${values[field.name] || 'N/A'}`)
      .join('\n')

    const formBody = new URLSearchParams({
      name: values.name,
      email: values.email,
      message: fieldLines,
      _subject: subject,
      _captcha: 'false',
    })

    try {
      const response = await fetch('https://formsubmit.co/ajax/admin@abiratech.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      })

      if (!response.ok) {
        throw new Error('Failed to send')
      }

      const data = await response.json()
      if (data.success !== 'true' && data.success !== true) {
        throw new Error('Send failed')
      }

      setStatus({ severity: 'success', message: 'Message sent successfully. We will contact you soon.' })
      setValues((prev) => {
        const cleared = {}
        Object.keys(prev).forEach((key) => {
          cleared[key] = ''
        })
        return cleared
      })
    } catch (error) {
      setStatus({
        severity: 'error',
        message:
          'Unable to send automatically. Your email client is opening so you can send the form directly.',
      })
      const mailtoBody = encodeURIComponent(fieldLines)
      const mailtoLink = `mailto:admin@abiratech.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`
      window.location.href = mailtoLink
    } finally {
      setShowSnackbar(true)
      setSubmitting(false)
    }
  }

  const allRequiredFilled = config.fields.every((field) => {
    if (!field.required) return true
    return Boolean(values[field.name]?.trim())
  })

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            backgroundColor: '#101010',
            border: '1px solid rgba(255, 154, 31, 0.18)',
            borderRadius: '24px',
            overflow: 'hidden',
          },
        }}
      >
        <DialogTitle sx={{ px: 4, pt: 4, pb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#FFFFFF', mb: 0.5 }}>
                {config.title}
              </Typography>
              <Typography sx={{ color: '#B8B8B8', lineHeight: 1.7 }}>
                {config.subtitle}
              </Typography>
            </Box>
            <IconButton onClick={onClose} size="small" sx={{ color: '#FFFFFF' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent sx={{ px: 4, pb: 3 }}>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            {config.fields.map((field) => (
              <TextField
                key={field.name}
                label={field.label}
                type={field.type}
                value={values[field.name]}
                onChange={handleChange(field.name)}
                required={field.required}
                fullWidth
                margin="normal"
                multiline={Boolean(field.multiline)}
                minRows={field.minRows || 1}
                InputLabelProps={{ style: { color: '#B8B8B8' } }}
                InputProps={{
                  sx: {
                    color: '#FFFFFF',
                    backgroundColor: '#121212',
                    borderRadius: '12px',
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.12)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 154, 31, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#FF9A1F',
                    },
                  },
                }}
              />
            ))}
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 4, pb: 4, pt: 1, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            onClick={onClose}
            disabled={submitting}
            sx={{ textTransform: 'none', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.16)' }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={submitting || !allRequiredFilled}
            variant="contained"
            sx={{ backgroundColor: '#FF9A1F', px: 4, py: 1.5, borderRadius: '12px' }}
          >
            {submitting ? 'Sending...' : config.buttonText}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={showSnackbar && Boolean(status.message)}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={status.severity || 'info'} sx={{ width: '100%' }}>
          {status.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default ContactDialog
