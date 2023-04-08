import re
from django.core import validators
from django.core.exceptions import ValidationError
from OTT import models


# def validate_file_extension_video(self):
#     """ This function is an amalgamation of two validations,
#     file size validation, file type validation, anf file extension validation"""

#     import os
#     ext = os.path.splitext(self.name)[1]
#     valid_extensions = ['.mp4', '.mov', '.avi', '.wmv', '.mkv', '.3gp']
#     if not ext.lower() in valid_extensions:
#         raise ValidationError('Unsupported file extension, please upload a file with a '
#                               'valid extension ie: mp4, mov, avi, or wmv')

#     file_size = self.size

#     if file_size > 10485760:  # 10MB
#         raise ValidationError("The maximum file size that can be uploaded is 10MB")
#     else:
#         return self


def validate_file_extension_image(self):
    """ This function is an amalgamation of two validations,
        file size validation, file type validation, anf file extension validation"""

    import os
    ext = os.path.splitext(self.name)[1]
    valid_extensions = ['.jpg', '.jpeg', '.png', '.gif']

    # Checks whether the file has a valid extension.
    if not ext.lower() in valid_extensions:
        raise ValidationError('Unsupported file extension, please upload a file '
                              'with a valid extension, ie: jpg, jpeg, png, gif ')

    file_size = self.size

    if file_size > 2621440:  # 2.5MB
        raise ValidationError("The maximum file size that can be uploaded is 2.5MB")
    else:
        return self