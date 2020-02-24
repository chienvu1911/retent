import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../form/Input";
import Textarea from "../form/Textarea";
import { Editor } from "@tinymce/tinymce-react";

const PostForm = ({ post, onChange, onBlur, loading, onSubmit }) => {
  const { title, body, errors } = post;
  return (
    <Container>
      <Row>
        <Col className="mx-auto">
          <Form noValidate onSubmit={onSubmit} className="p-sm-3 p-xs-1">
            <Input
              name="title"
              type="text"
              placeholder="Enter Post Title"
              value={title}
              onChange={onChange}
              onBlur={onBlur}
              text={{
                module: "post",
                label: "Title",
                error: errors.title
              }}
            />
            <Editor
              initialValue="<p>This is the initial content of the editor</p>"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount"
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help"
                  }}
            />
            <Button
              variant="outline-info"
              type="submit"
              disabled={loading}
              className="mt-3"
            >
              Publish
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

PostForm.propTypes = {
  post: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PostForm;
