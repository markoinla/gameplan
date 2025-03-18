from app import db
from datetime import datetime

class Project(db.Model):
    """
    Project model representing an AI coding project
    
    Fields:
    - id: Primary key
    - name: Project name (required)
    - description: Project description and goals
    - requirements: Project requirements
    - created_at: Timestamp when the project was created
    - updated_at: Timestamp when the project was last updated
    - sprints: Relationship to Sprint model (one-to-many)
    """
    # Table name
    __tablename__ = 'projects'
    
    # Columns
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    requirements = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    # One project can have many sprints
    sprints = db.relationship('Sprint', backref='project', lazy='dynamic', cascade='all, delete-orphan')
    
    def __repr__(self):
        """String representation of the Project object"""
        return f'<Project {self.name}>'
    
    def to_dict(self):
        """Convert project to dictionary for API responses"""
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'requirements': self.requirements,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None,
            'sprints': [sprint.to_dict() for sprint in self.sprints]
        }
        
    def to_dict_simple(self):
        """Convert project to dictionary without related objects for API responses"""
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'requirements': self.requirements,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }
