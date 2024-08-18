import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateReviewForm } from '../../utils/validateReviewForm';
import { postReview } from './reviewsSlice';

const ReviewForm = ({ movieId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const review = {
      movieId: parseInt(movieId),
      rating: values.rating,
      author: values.author,
      text: values.reviewText,
      date: new Date(Date.now()).toISOString(),
    };
    console.log(review);
    dispatch(postReview(review));
    setModalOpen(false);
  };

  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        <i className='fa fa-pencil fa-lg' /> Add Review
      </Button>
      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)}>Add Review</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{ rating: undefined, author: 'saikrupa', reviewText: '' }}
            onSubmit={handleSubmit}
            validate={validateReviewForm}
          >
            <Form>
              <FormGroup>
                <Label htmlFor='rating'>Rating</Label>
                <Field name='rating' as='select' className='form-control'>
                  <option>Select...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Field>
                <ErrorMessage name='rating'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='author'>Name</Label>
                <Field
                  name='author'
                  placeholder='Name'
                  className='form-control'
                  disabled
                />
                <ErrorMessage name='author'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='reviewText'>Review</Label>
                <Field
                  name='reviewText'
                  as='textarea'
                  rows='12'
                  className='form-control'
                />
              </FormGroup>
              <Button type='submit' color='primary'>
                Submit
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ReviewForm;
